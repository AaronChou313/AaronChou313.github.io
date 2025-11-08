// Function to load experience content from experience-config.json
async function loadExperience() {
    try {
        // Determine the correct path to the config file based on the current page location
        let basePath = '';
        const response = await fetch(basePath + 'config/experience-config.json');
        const data = await response.json();
        
        // Load education items
        const educationContainer = document.querySelector('.education-list');
        if (educationContainer && data.education) {
            educationContainer.innerHTML = data.education.map(edu => `
                <div class="experience-item">
                    <h3>${edu.degree}</h3>
                    <p>${edu.institution}</p>
                    ${edu.major ? `<p>Major: ${edu.major}</p>` : ''}
                    ${edu.description ? `<p>${edu.description}</p>` : ''}
                    <p class="date">${edu.startDate} - ${edu.endDate}</p>
                </div>
            `).join('');
        }
        
        // Load research items
        const researchContainer = document.querySelector('.research-list');
        if (researchContainer && data.research) {
            researchContainer.innerHTML = data.research.map(res => `
                <div class="experience-item">
                    <h3>${res.title}</h3>
                    <p>${res.organization}</p>
                    ${res.mentors ? `<p>Mentors: ${res.mentors}</p>` : ''}
                    ${res.description ? `<p>${res.description}</p>` : ''}
                    <p class="date">${res.startDate} - ${res.endDate}</p>
                </div>
            `).join('');
        }
        
        // Load occupation items
        const occupationContainer = document.querySelector('.occupation-list');
        if (occupationContainer && data.occupation) {
            occupationContainer.innerHTML = data.occupation.map(job => `
                <div class="experience-item">
                    <h3>${job.title}</h3>
                    <p>${job.organization}</p>
                    ${job.mentors ? `<p>Mentors: ${job.mentors}</p>` : ''}
                    ${job.description ? `<p>${job.description}</p>` : ''}
                    <p class="date">${job.startDate} - ${job.endDate}</p>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading experience:', error);
        // Try to show error in the containers if they exist
        const containers = ['.education-list', '.research-list', '.occupation-list'];
        containers.forEach(selector => {
            const container = document.querySelector(selector);
            if (container) {
                container.innerHTML = `<p>Error loading experience data.</p>`;
            }
        });
    }
}

// Load experience when DOM is loaded
// In SPA, this function may be called manually after content is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadExperience);
} else {
    // DOM is already loaded, call directly
    loadExperience();
}