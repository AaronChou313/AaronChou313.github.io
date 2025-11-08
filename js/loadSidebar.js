// Function to load sidebar content from profile-config.json
async function loadSidebar() {
    try {
        // Determine the correct path to the config file based on the current page location
        let basePath = '';
        const response = await fetch(basePath + 'config/profile-config.json');
        const data = await response.json();
        const profileContainer = document.querySelector('.profile');
        
        if (profileContainer && data.profile) {
            // Build personal info section
            let personalInfoHTML = '';
            if (data.profile['personal-info']) {
                const personalInfo = data.profile['personal-info'];
                personalInfoHTML = `
                    <div class="personal-info">
                        ${Object.entries(personalInfo).map(([key, info]) => {
                            // Only render items that have a value
                            if (info.value) {
                                const iconHTML = info.icon ? 
                                    `<img src="${basePath}assets/icons/${info.icon}" alt="${key}" class="personal-info-icon">` : 
                                    '';
                                
                                // If there's a URL, make it a link
                                if (info.url) {
                                    return `<p><a href="${info.url}" target="_blank">${iconHTML}${info.value}</a></p>`;
                                } else {
                                    return `<p>${iconHTML}${info.value}</p>`;
                                }
                            }
                            return '';
                        }).join('')}
                    </div>
                `;
            }
            
            // Add motto if it exists
            const mottoHTML = data.profile.motto ? `<div class="motto">${data.profile.motto}</div>` : '';
            
            profileContainer.innerHTML = `
                <div class="profile-image">
                    <img src="${basePath}${data.profile.image}" alt="${data.profile.name}">
                </div>
                <h2>${data.profile.name}</h2>
                ${mottoHTML}
                ${personalInfoHTML}
                <div class="social-links">
                    ${data.profile.social.map(social => {
                        // Only show social links that have a valid URL (not empty or just #)
                        if (social.url && social.url !== '#') {
                            return `<a href="${social.url}" target="_blank" title="${social.name}">
                                        <img src="${basePath}assets/icons/${social.icon}" alt="${social.name}">
                                    </a>`;
                        }
                        return '';
                    }).join('')}
                </div>
            `;
        } else if (profileContainer) {
            profileContainer.innerHTML = '<p>Profile information not available.</p>';
        }
    } catch (error) {
        console.error('Error loading sidebar:', error);
        const profileContainer = document.querySelector('.profile');
        if (profileContainer) {
            profileContainer.innerHTML = '<p>Error loading profile information.</p>';
        }
    }
}

// Load sidebar when DOM is loaded
// In SPA, this function may be called manually after content is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSidebar);
} else {
    // DOM is already loaded, call directly
    loadSidebar();
}