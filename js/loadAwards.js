// Function to load awards content from awards-config.json
async function loadAwards() {
    try {
        // Determine the correct path to the config file based on the current page location
        let basePath = '';
        const response = await fetch(basePath + 'config/awards-config.json');
        const data = await response.json();
        const awardsContainer = document.querySelector('.awards-list');
        
        if (awardsContainer && data.awards) {
            awardsContainer.innerHTML = data.awards.map(award => `
                <div class="award-item">
                    ${award.img ? `<div class="award-image"><img src="${basePath}${award.img}" alt="${award.title}"></div>` : ''}
                    <div class="award-content">
                        <h3>${award.title}</h3>
                        <p class="organization">${award.organization}</p>
                        <p class="date">${award.date}</p>
                        <div class="award-description">
                            <p class="description">${award.description}</p>
                        </div>
                        ${award.news ? `<div class="award-links"><a href="${award.news}" class="news-btn" target="_blank">News</a></div>` : ''}
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading awards:', error);
        const awardsContainer = document.querySelector('.awards-list');
        if (awardsContainer) {
            awardsContainer.innerHTML = `<p>Error loading awards data.</p>`;
        }
    }
}

// Load awards when DOM is loaded
// In SPA, this function may be called manually after content is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAwards);
} else {
    // DOM is already loaded, call directly
    loadAwards();
}