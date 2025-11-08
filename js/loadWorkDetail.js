// Function to load work detail content
async function loadWorkDetail(workId) {
    const contentContainer = document.getElementById('main-content');
    if (!contentContainer) {
        console.error('Main content container not found');
        return;
    }
    
    try {
        // Load works config
        let basePath = '';
        const response = await fetch(basePath + 'config/works-config.json');
        const data = await response.json();
        
        // Find the work with the given ID
        const work = data.works.find(w => w.id == workId);
        
        if (!work) {
            contentContainer.innerHTML = '<h1>Work Not Found</h1><p>The requested work could not be found.</p>';
            return;
        }
        
        // Find the "View Details" link to get the markdown file path
        const viewDetailsLink = work.links.find(link => link.text === 'View Details');
        let workContent = '';
        
        // Load markdown content if available
        if (viewDetailsLink && viewDetailsLink.url) {
            try {
                const mdResponse = await fetch(basePath + viewDetailsLink.url);
                workContent = await mdResponse.text();
            } catch (mdError) {
                console.error('Error loading work markdown:', mdError);
                workContent = '<p>Content could not be loaded.</p>';
            }
        }
        
        // Render the work detail page
        contentContainer.innerHTML = `
            <div class="work-detail">
                <a href="?page=Works" class="back-link">&larr; Back to Works</a>
                <div class="work-detail-markdown markdown-content">
                    ${MarkdownRenderer.render(workContent)}
                </div>
                <div class="work-detail-links">
                    ${work.links.map(link => {
                        if (link.text === 'View Details') {
                            return '';
                        }
                        return `<a href="${link.url}" class="btn" target="_blank">${link.text}</a>`;
                    }).join('')}
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading work detail:', error);
        contentContainer.innerHTML = `<h1>Error</h1><p>Failed to load work details: ${error.message}</p>`;
    }
}

// Make the function available globally
window.loadWorkDetail = loadWorkDetail;