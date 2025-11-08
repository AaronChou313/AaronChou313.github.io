// Function to load publications content from publications-config.json
async function loadPublications() {
    try {
        // Determine the correct path to the config file based on the current page location
        let basePath = '';
        const response = await fetch(basePath + 'config/publications-config.json');
        const data = await response.json();
        const publicationsContainer = document.querySelector('.publication-list');
        
        if (publicationsContainer && data.publications) {
            publicationsContainer.innerHTML = data.publications.map(pub => {
                // Format authors list, highlighting the current user
                const formattedAuthors = pub.authors.map(author => 
                    author === "Mingyang Zhou" ? `<strong>${author}</strong>` : author
                ).join(', ');
                
                return `
                    <div class="publication-item">
                        ${pub.img ? `<div class="publication-image"><img src="${basePath}${pub.img}" alt="${pub.title}"></div>` : ''}
                        <div class="publication-content">
                            <h3>${pub.title}</h3>
                            <p class="authors">${formattedAuthors}</p>
                            <p class="journal">${pub.journal}, ${pub.year}</p>
                            <div class="publication-links">
                                ${pub.links.map(link => 
                                    `<a href="${link.url}" class="btn" target="_blank">${link.text}</a>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    } catch (error) {
        console.error('Error loading publications:', error);
        const publicationsContainer = document.querySelector('.publication-list');
        if (publicationsContainer) {
            publicationsContainer.innerHTML = `<p>Error loading publications data.</p>`;
        }
    }
}

// Load publications when DOM is loaded
// In SPA, this function may be called manually after content is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPublications);
} else {
    // DOM is already loaded, call directly
    loadPublications();
}