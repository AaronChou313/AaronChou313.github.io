// Content router to load different markdown files based on URL parameters
class ContentRouter {
    static defaultPage = 'About';
    static contentMap = {};
    
    static async initContentMap() {
        try {
            const response = await fetch('config/navigation-config.json');
            const navConfig = await response.json();
            
            // Build contentMap from navigation config
            navConfig.navigation.forEach(item => {
                // Extract page name from the URL by removing 'content/' prefix and '.md' suffix
                const pageName = item.name;
                this.contentMap[pageName] = item.url;
            });
        } catch (error) {
            console.error('Error loading navigation config:', error);
        }
    }
    
    static async loadContent(page) {
        const contentContainer = document.getElementById('main-content');
        if (!contentContainer) {
            console.error('Main content container not found');
            return;
        }
        
        // Initialize content map if not already done
        if (Object.keys(this.contentMap).length === 0) {
            await this.initContentMap();
        }
        
        // Handle homepage (no page parameter) - load default page
        if (!page) {
            page = this.defaultPage;
        }
        
        // Check if it's a work detail page
        if (page.startsWith('work-detail-')) {
            const workId = page.split('-')[2];
            // Load work detail using the standalone function
            if (typeof loadWorkDetail === 'function') {
                await loadWorkDetail(workId);
            } else {
                contentContainer.innerHTML = '<h1>Error</h1><p>Work detail module not loaded.</p>';
            }
            return;
        }
        
        // Check if page exists in our map
        if (!this.contentMap[page]) {
            contentContainer.innerHTML = '<h1>Page Not Found</h1><p>The requested page could not be found.</p>';
            return;
        }
        
        // Show loading state
        contentContainer.innerHTML = '<div class="loading">Loading content...</div>';
        
        try {
            // Load and render the markdown content
            const content = await MarkdownRenderer.loadAndRender(this.contentMap[page]);
            contentContainer.innerHTML = `<div class="markdown-content">${content}</div>`;
            
            // Load any additional functionality needed for specific pages
            this.loadPageSpecificScripts(page);
        } catch (error) {
            console.error('Error loading page content:', error);
            contentContainer.innerHTML = `<h1>Error</h1><p>Failed to load page content: ${error.message}</p>`;
        }
    }
    
    static loadPageSpecificScripts(page) {
        // Use setTimeout to ensure DOM is updated before calling functions
        setTimeout(() => {
            // Reload sidebar and navbar on every page load
            if (typeof loadSidebar === 'function') {
                loadSidebar();
            }
            
            if (typeof loadNavbar === 'function') {
                loadNavbar();
            }
            
            // Load scripts based on page type
            switch(page) {
                case 'Works':
                    // Reload works if needed
                    if (typeof loadWorks === 'function') {
                        loadWorks();
                    }
                    break;
                case 'Experience':
                    // Reload experience if needed
                    if (typeof loadExperience === 'function') {
                        loadExperience();
                    }
                    break;
                case 'Publications':
                    // Reload publications if needed
                    if (typeof loadPublications === 'function') {
                        loadPublications();
                    }
                    break;
                case 'Awards':
                    // Reload awards if needed
                    if (typeof loadAwards === 'function') {
                        loadAwards();
                    }
                    break;
                case 'About':
                    // Reload experience for about page as it contains education and research sections
                    if (typeof loadExperience === 'function') {
                        loadExperience();
                    }
                    break;
            }
        }, 100);
    }
    
    static init() {
        // Initialize content map
        this.initContentMap().then(() => {
            // Get page from URL parameter
            const urlParams = new URLSearchParams(window.location.search);
            const page = urlParams.get('page');
            
            // Load the content
            this.loadContent(page);
            
            // Handle navigation clicks
            this.setupNavigation();
            
            // Load sidebar and navbar initially
            setTimeout(() => {
                if (typeof loadSidebar === 'function') {
                    loadSidebar();
                }
                
                if (typeof loadNavbar === 'function') {
                    loadNavbar();
                }
            }, 0);
        });
    }
    
    static setupNavigation() {
        // Add click handlers to navigation links
        document.addEventListener('click', (e) => {
            // Handle navigation links
            if (e.target.classList.contains('nav-link')) {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                if (page) {
                    this.navigateTo(page);
                } else {
                    // Handle home page
                    this.navigateTo('');
                }
            }
            
            // Handle internal links with data-page attribute
            if (e.target.hasAttribute('data-page')) {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                if (page !== null) {
                    this.navigateTo(page);
                }
            }
            
            // Handle work detail links from works page
            if (e.target.closest('.work-links a')) {
                const link = e.target.closest('.work-links a');
                const href = link.getAttribute('href');
                if (href && href.startsWith('?page=work-detail-')) {
                    e.preventDefault();
                    const urlParams = new URLSearchParams(href.substring(1));
                    const page = urlParams.get('page');
                    if (page) {
                        this.navigateTo(page);
                    }
                }
            }
            
            // Handle back to works link
            if (e.target.classList.contains('back-link')) {
                e.preventDefault();
                this.navigateTo('Works');
            }
            
            // Handle logo/homepage link
            if (e.target.tagName === 'A' && e.target.closest('.nav-logo')) {
                e.preventDefault();
                this.navigateTo('');
            }
        });
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const page = urlParams.get('page');
            this.loadContent(page);
        });
    }
    
    static navigateTo(page) {
        // Update URL
        let url;
        if (page) {
            url = `${window.location.pathname}?page=${page}`;
        } else {
            url = window.location.pathname;
        }
        history.pushState({page: page}, '', url);
        
        // Load content
        this.loadContent(page);
    }
}