// Function to load navbar content from site-config.json
async function loadNavbar() {
    try {
        // Determine the correct path to the config file based on the current page location
        let basePath = '';
        const response = await fetch(basePath + 'config/navigation-config.json');
        const data = await response.json();
        const navContainer = document.querySelector('.nav-menu');
        
        if (navContainer && data.navigation) {
            navContainer.innerHTML = data.navigation.map(item => {
                // Extract page name from the URL by removing 'content/' prefix and '.md' suffix
                const pageName = item.name;
                return `
                <li class="nav-item">
                    <a href="?page=${pageName}" class="nav-link" data-page="${pageName}">${item.name}</a>
                </li>
            `;
            }).join('');
        }

        // Update logo link based on current page
        const logoLink = document.querySelector('.nav-logo a');
        if (logoLink) {
            logoLink.href = basePath + 'index.html';
            logoLink.setAttribute('data-page', '');
        }
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}

// Load navbar when DOM is loaded
// In SPA, this function may be called manually after content is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    // DOM is already loaded, call directly
    loadNavbar();
}