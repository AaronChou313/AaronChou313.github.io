// ==========================================
// 全局变量和元素引用
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const colorToggle = document.getElementById('color-toggle');
const langToggle = document.getElementById('lang-toggle');

let currentLang = 'en';
let currentColor = config.defaultColor || 'blue'; // 使用配置的默认颜色

// ==========================================
// 页面初始化
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage(currentLang);
    updateColorTheme(currentColor);
});

// ==========================================
// 主题切换功能
// ==========================================
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ==========================================
// 颜色切换功能
// ==========================================
colorToggle.addEventListener('click', () => {
    showColorPicker();
});

function showColorPicker() {
    // 检查是否已经存在颜色选择器
    let colorPickerOverlay = document.querySelector('.color-picker-overlay');
    
    if (!colorPickerOverlay) {
        // 创建颜色选择器弹窗
        colorPickerOverlay = document.createElement('div');
        colorPickerOverlay.className = 'color-picker-overlay';
        colorPickerOverlay.innerHTML = `
            <div class="color-picker-container">
                <div class="color-picker-header">
                    <h3>${currentLang === 'en' ? 'Choose Theme Color' : '选择主题颜色'}</h3>
                    <button class="color-picker-close">&times;</button>
                </div>
                <div class="color-options">
                    ${Object.keys(config.themeColors).map(colorKey => `
                        <div class="color-option ${colorKey === currentColor ? 'active' : ''}" 
                             data-color="${colorKey}" 
                             style="color: ${config.themeColors[colorKey].color}"
                             title="${config.themeColors[colorKey].name[currentLang]}">
                            <span>${config.themeColors[colorKey].name[currentLang]}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="color-picker-footer">
                    ${currentLang === 'en' ? 'Click on a color to apply' : '点击颜色应用'}
                </div>
            </div>
        `;
        
        document.body.appendChild(colorPickerOverlay);
        
        // 添加关闭事件监听器
        const closeBtn = colorPickerOverlay.querySelector('.color-picker-close');
        closeBtn.addEventListener('click', () => {
            closeColorPicker(colorPickerOverlay);
        });
        
        // 点击遮罩层关闭
        colorPickerOverlay.addEventListener('click', (e) => {
            if (e.target === colorPickerOverlay) {
                closeColorPicker(colorPickerOverlay);
            }
        });
        
        // 添加颜色选择事件监听器
        colorPickerOverlay.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', function() {
                const selectedColor = this.getAttribute('data-color');
                currentColor = selectedColor;
                updateColorTheme(selectedColor);
                
                // 更新选中状态
                colorPickerOverlay.querySelectorAll('.color-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');
                
                // 选择颜色后自动关闭颜色选择器
                setTimeout(() => {
                    closeColorPicker(colorPickerOverlay);
                }, 300);
            });
        });
    }
    
    // 显示颜色选择器
    setTimeout(() => {
        colorPickerOverlay.classList.add('active');
    }, 10);
}

function closeColorPicker(colorPickerOverlay) {
    colorPickerOverlay.classList.remove('active');
    setTimeout(() => {
        if (colorPickerOverlay.parentNode) {
            colorPickerOverlay.parentNode.removeChild(colorPickerOverlay);
        }
    }, 300);
}

function updateColorTheme(colorKey) {
    const colorValue = config.themeColors[colorKey].color;
    document.documentElement.style.setProperty('--primary-color', colorValue);
    
    // 在暗色模式下，稍微调整颜色以保持良好的对比度
    const darkModeColor = adjustColorForDarkMode(colorValue);
    document.documentElement.style.setProperty('--primary-color-dark', darkModeColor);
}

function adjustColorForDarkMode(hexColor) {
    // 将十六进制颜色转换为RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // 在暗色模式下稍微提亮颜色
    const factor = 1.3;
    const newR = Math.min(255, Math.floor(r * factor));
    const newG = Math.min(255, Math.floor(g * factor));
    const newB = Math.min(255, Math.floor(b * factor));
    
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}

// ==========================================
// 语言切换功能
// ==========================================
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updatePageLanguage(currentLang);
});

function updatePageLanguage(lang) {
    currentLang = lang;
    
    // Update page title
    document.getElementById('page-title').textContent = config.translations[lang]['page-title'];
    
    // Update navigation
    document.getElementById('nav-brand').textContent = config.translations[lang]['nav-brand'];
    document.getElementById('nav-about').textContent = config.translations[lang]["nav-about"];
    document.getElementById('nav-education').textContent = config.translations[lang]["nav-education"];
    document.getElementById('nav-papers').textContent = config.translations[lang]["nav-papers"];
    document.getElementById('nav-awards').textContent = config.translations[lang]["nav-awards"];
    document.getElementById('nav-sharing').textContent = config.translations[lang]["nav-sharing"];
    
    // Update profile section - 从配置中获取个人信息
    document.getElementById('name').textContent = config.personalInfo.name[lang];
    document.getElementById('title').textContent = config.personalInfo.title[lang];
    document.getElementById('institution').textContent = config.personalInfo.institution[lang];
    document.getElementById('email').textContent = config.personalInfo.email; // 统一的邮箱
    // 更新头像 - 统一的头像
    document.getElementById('profile-photo').src = config.personalInfo.profileImage;
    
    // Update social links - 从配置中动态生成
    updateSocialLinks(lang);
    
    // Update about section - 使用新的自我介绍内容配置
    document.getElementById('about-title').textContent = config.translations[lang]['about-title'];
    document.getElementById('about-content1').textContent = config.aboutContent[lang].content1;
    document.getElementById('about-content2').textContent = config.aboutContent[lang].content2;
    document.getElementById('about-content3').textContent = config.aboutContent[lang].content3;
    document.getElementById('about-interests').textContent = config.aboutContent[lang].interests;
    
    // Update section titles
    document.getElementById('education-title').textContent = config.translations[lang]['education-title'];
    document.getElementById('papers-title').textContent = config.translations[lang]['papers-title'];
    document.getElementById('awards-title').textContent = config.translations[lang]['awards-title'];
    document.getElementById('sharing-title').textContent = config.translations[lang]['sharing-title'];
    
    // Update papers section titles
    document.getElementById('selected-papers-title').textContent = config.translations[lang]['selected-papers-title'];
    document.getElementById('other-papers-title').textContent = config.translations[lang]['other-papers-title'];
    
    // Update footer
    document.getElementById('footer-text').textContent = config.translations[lang]['footer-text'];
    
    // Update control buttons
    document.getElementById('theme-toggle').textContent = config.translations[lang]['theme-toggle'];
    document.getElementById('lang-toggle').textContent = config.translations[lang]['lang-toggle'];
    document.getElementById('color-toggle').textContent = config.translations[lang]['color-toggle'];
    
    // Update education section
    updateEducationSection(lang);
    
    // Update papers section
    updatePapersSection(lang);
    
    // Update awards section
    updateAwardsSection(lang);
    
    // Update sharing section
    updateSharingSection(lang);
    
    // 如果颜色选择器打开，则更新其语言
    updateColorPickerLanguage(lang);
}

function updateColorPickerLanguage(lang) {
    const colorPickerOverlay = document.querySelector('.color-picker-overlay');
    if (colorPickerOverlay) {
        const header = colorPickerOverlay.querySelector('.color-picker-header h3');
        const footer = colorPickerOverlay.querySelector('.color-picker-footer');
        
        header.textContent = lang === 'en' ? 'Choose Theme Color' : '选择主题颜色';
        footer.textContent = lang === 'en' ? 'Click on a color to apply' : '点击颜色应用';
        
        // 更新颜色选项的文本
        colorPickerOverlay.querySelectorAll('.color-option').forEach(option => {
            const colorKey = option.getAttribute('data-color');
            const span = option.querySelector('span');
            span.textContent = config.themeColors[colorKey].name[lang];
            option.title = config.themeColors[colorKey].name[lang];
        });
    }
}

// ==========================================
// 各部分内容更新函数
// ==========================================

function updateSocialLinks(lang) {
    const socialLinksContainer = document.querySelector('.social-links');
    socialLinksContainer.innerHTML = '';
    
    Object.keys(config.socialLinks).forEach(key => {
        const socialLink = config.socialLinks[key];
        
        if (socialLink.visible !== false) {
            const linkElement = document.createElement('a');
            linkElement.href = socialLink.url;
            linkElement.id = `${key}-link`;
            linkElement.className = 'social-link';
            linkElement.title = socialLink.title[lang];
            if (key === 'github') {
                linkElement.target = '_blank';
            }
            
            const imgElement = document.createElement('img');
            imgElement.src = socialLink.icon;
            imgElement.alt = socialLink.title[lang];
            imgElement.className = 'social-icon';
            
            linkElement.appendChild(imgElement);
            socialLinksContainer.appendChild(linkElement);
        }
    });
}

function updateEducationSection(lang) {
    const educationSection = document.getElementById('education');
    const educationList = document.getElementById('education-list');
    educationList.innerHTML = '';
    
    config.educationData.common.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';
        
        let detailsHTML = '';
        edu.details.forEach(detail => {
            detailsHTML += `<div>${detail[lang]}</div>`;
        });
        
        eduItem.innerHTML = `
            <div class="time">${edu.time}</div>
            <div class="institution">${edu.institution[lang]}</div>
            <div>${edu.degree[lang]}</div>
            ${detailsHTML}
        `;
        
        educationList.appendChild(eduItem);
    });
    
    // 如果教育经历列表为空，则隐藏整个模块
    if (config.educationData.common.length === 0) {
        educationSection.classList.add('hidden');
    } else {
        educationSection.classList.remove('hidden');
    }
}

function updatePapersSection(lang) {
    // Update selected papers
    const papersSection = document.getElementById('papers');
    const selectedPapersList = document.getElementById('selected-papers-list');
    const otherPapersList = document.getElementById('other-papers-list');
    const selectedPapersTitle = document.getElementById('selected-papers-title');
    const otherPapersTitle = document.getElementById('other-papers-title');
    
    selectedPapersList.innerHTML = '';
    otherPapersList.innerHTML = '';
    
    // 处理精选论文
    config.papersData.common.selected.forEach(paper => {
        const paperItem = document.createElement('div');
        paperItem.className = 'paper-item selected';
        
        // 处理作者列表，将**name**转换为<strong>name</strong>
        const authorsHTML = paper.authors.map(author => 
            author.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        ).join(', ');
        
        // 创建按钮HTML
        let buttonsHTML = '';
        if (paper.links.pdf && paper.links.pdf !== '#') {
            buttonsHTML += `<a href="${paper.links.pdf}" class="paper-button" target="_blank">${config.translations[lang]['pdf-button']}</a>`;
        }
        if (paper.links.cite && paper.links.cite !== '#') {
            buttonsHTML += `<a href="${paper.links.cite}" class="paper-button" target="_blank">${config.translations[lang]['cite-button']}</a>`;
        }
        if (paper.links.slides && paper.links.slides !== '#') {
            buttonsHTML += `<a href="${paper.links.slides}" class="paper-button" target="_blank">${config.translations[lang]['slides-button']}</a>`;
        }
        if (paper.links.video && paper.links.video !== '#') {
            buttonsHTML += `<a href="${paper.links.video}" class="paper-button" target="_blank">${config.translations[lang]['video-button']}</a>`;
        }
        
        paperItem.innerHTML = `
            <div class="paper-image">
                <img src="src/${paper.image}" alt="${paper.title[lang]}" onerror="this.style.display='none'">
            </div>
            <div class="paper-content">
                <h4 class="paper-title">${paper.title[lang]}</h4>
                <div class="paper-authors">${authorsHTML}</div>
                <div class="paper-venue">${paper.venue}</div>
                <div class="paper-description">${paper.description[lang]}</div>
                <div class="paper-buttons">
                    ${buttonsHTML}
                </div>
            </div>
        `;
        
        selectedPapersList.appendChild(paperItem);
    });
    
    // Update other papers
    config.papersData.common.other.forEach(paper => {
        const paperItem = document.createElement('div');
        paperItem.className = 'paper-item other';
        
        // 处理引用文本，将**name**转换为<strong>name</strong>
        const referenceHTML = paper.reference[lang].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // 创建按钮HTML
        let buttonsHTML = '';
        if (paper.links.pdf && paper.links.pdf !== '#') {
            buttonsHTML += `<a href="${paper.links.pdf}" class="paper-button" target="_blank">${config.translations[lang]['pdf-button']}</a>`;
        }
        if (paper.links.cite && paper.links.cite !== '#') {
            buttonsHTML += `<a href="${paper.links.cite}" class="paper-button" target="_blank">${config.translations[lang]['cite-button']}</a>`;
        }
        
        paperItem.innerHTML = `
            <div class="paper-content">
                <div class="paper-reference">${referenceHTML}</div>
                <div class="paper-buttons">
                    ${buttonsHTML}
                </div>
            </div>
        `;
        
        otherPapersList.appendChild(paperItem);
    });
    
    // 显示或隐藏论文标题
    if (config.papersData.common.selected.length > 0) {
        selectedPapersTitle.style.display = 'block';
    } else {
        selectedPapersTitle.style.display = 'none';
    }
    
    if (config.papersData.common.other.length > 0) {
        otherPapersTitle.style.display = 'block';
    } else {
        otherPapersTitle.style.display = 'none';
    }
    
    // 如果两个列表都为空，则隐藏整个模块
    if (config.papersData.common.selected.length === 0 && config.papersData.common.other.length === 0) {
        papersSection.classList.add('hidden');
    } else {
        papersSection.classList.remove('hidden');
    }
}

function updateAwardsSection(lang) {
    const awardsSection = document.getElementById('awards');
    const awardsList = document.getElementById('awards-list');
    awardsList.innerHTML = '';
    
    config.awardsData.common.forEach(award => {
        const awardItem = document.createElement('div');
        awardItem.className = 'award-item';
        
        // 只有当news不为"#"时才显示新闻链接
        const newsLink = award.news !== '#' ? 
            `<a href="${award.news}" class="award-news">${config.translations[lang]['news-link']}</a>` : '';
        
        awardItem.innerHTML = `
            <div class="award-logo">
                <img src="src/${award.logo}" alt="${award.name[lang]}" onerror="this.style.display='none'">
            </div>
            <div class="award-content">
                <h3 class="award-name">${award.name[lang]}</h3>
                <div class="award-prize">${award.prize[lang]}</div>
                <div class="award-organization">${award.organization[lang]}</div>
                <div class="award-date">${award.date}</div>
                ${newsLink}
            </div>
        `;
        
        awardsList.appendChild(awardItem);
    });
    
    // 如果获奖列表为空，则隐藏整个模块
    if (config.awardsData.common.length === 0) {
        awardsSection.classList.add('hidden');
    } else {
        awardsSection.classList.remove('hidden');
    }
}

function updateSharingSection(lang) {
    const sharingSection = document.getElementById('sharing');
    const sharingList = document.getElementById('sharing-list');
    sharingList.innerHTML = '';
    
    config.sharingData.common.forEach(item => {
        const sharingItem = document.createElement('div');
        sharingItem.className = 'sharing-item';
        
        sharingItem.innerHTML = `
            <div class="sharing-logo">
                <img src="src/${item.logo}" alt="${item.name[lang]}" onerror="this.style.display='none'">
            </div>
            <div class="sharing-content">
                <h3 class="sharing-name">${item.name[lang]}</h3>
                <p class="sharing-description">${item.description[lang]}</p>
                <a href="${item.link}" class="sharing-link" target="_blank">${item.buttonText[lang]} →</a>
            </div>
        `;
        
        sharingList.appendChild(sharingItem);
    });
    
    // 如果分享列表为空，则隐藏整个模块
    if (config.sharingData.common.length === 0) {
        sharingSection.classList.add('hidden');
    } else {
        sharingSection.classList.remove('hidden');
    }
}

// ==========================================
// 平滑滚动功能
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});