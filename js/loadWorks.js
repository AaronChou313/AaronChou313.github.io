// Function to load works from works-config.json
async function loadWorks() {
    try {
        // Determine the correct path to the config file based on the current page location
        let basePath = '';
        const response = await fetch(basePath + 'config/works-config.json');
        const data = await response.json();
        const worksContainer = document.getElementById('works-container');
        
        if (worksContainer && data.works) {
            worksContainer.innerHTML = data.works.map(work => `
                <div class="work-item">
                    <div class="work-image">
                        <img src="${basePath}${work.image}" alt="${work.title}">
                    </div>
                    <div class="work-content">
                        <h3>${work.title}</h3>
                        <p class="work-description">${work.description}</p>
                        <p class="work-tech">Technologies: ${work.tech}</p>
                        <div class="work-links">
                            ${work.links.map(link => {
                                // Check if this is a detail link (View Details)
                                if (link.text === 'View Details' && link.url) {
                                    // Use the actual work ID for routing
                                    return `<a href="?page=work-detail-${work.id}" class="btn">${link.text}</a>`;
                                }
                                return `<a href="${link.url}" class="btn" target="_blank">${link.text}</a>`;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading works:', error);
        const worksContainer = document.getElementById('works-container');
        if (worksContainer) {
            worksContainer.innerHTML = `<p>Error loading works data.</p>`;
        }
    }
}

// Load works when DOM is loaded
// In SPA, this function may be called manually after content is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWorks);
} else {
    // DOM is already loaded, call directly
    loadWorks();
}