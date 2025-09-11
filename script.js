// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
let currentLang = 'en';

// 教育经历数据
const educationData = {
    en: [
        {
            time: "2026.09 - 2028.06",
            institution: "National Key Laboratory of Surveying, Mapping and Remote Sensing, Wuhan University",
            degree: "Master's Degree in Remote Sensing Science and Technology",
            details: [
                "Recommended for postgraduate studies at: National Key Laboratory of Surveying, Mapping and Remote Sensing, Wuhan University",
                "Expected Research Focus: Autonomous Positioning and Perception of Unmanned Systems",
                "Advisor: Prof. Li You"
            ]
        },
        {
            time: "2022.09 - 2026.06",
            institution: "School of Remote Sensing and Information Engineering, Wuhan University",
            degree: "Bachelor's Degree in Spatial Information and Digital Technology (In Progress)",
            details: []
        }
    ],
    zh: [
        {
            time: "2026.09 - 2028.06",
            institution: "武汉大学 测绘遥感信息工程全国重点实验室",
            degree: "遥感科学与技术专业 硕士",
            details: [
                "已推免至：武汉大学 测绘遥感信息工程全国重点实验室",
                "预计研究方向：无人系统自主定位与感知",
                "导师：李由教授"
            ]
        },
        {
            time: "2022.09 - 2026.06",
            institution: "武汉大学 遥感信息工程学院",
            degree: "空间信息与数字技术专业 本科在读",
            details: []
        }
    ]
};

// 获奖经历数据
const awardsData = {
    en: [
        {
            logo: "robomaster.png",
            name: "RoboMaster University League - Infantry Duel",
            prize: "National First Prize",
            organization: "National University Robot Competition Organizing Committee / DJI Innovation",
            date: "2025",
            news: "#"
        },
        {
            logo: "craic.png",
            name: "China Robotics and Artificial Intelligence Competition",
            prize: "National Second Prize",
            organization: "China Robotics and Artificial Intelligence Competition Organizing Committee",
            date: "2025",
            news: "#"
        },
        {
            logo: "raicom.png",
            name: "RAICOM National Robot Developer Competition",
            prize: "National Second Prize",
            organization: "Ministry of Industry and Information Technology Talent Exchange Center",
            date: "2025",
            news: "#"
        },
        {
            logo: "hzsk.png",
            name: "Huazhong CNC Cup Industrial Collaborative Robot and Digital Twinning Technology Innovation Application Special Competition",
            prize: "Hubei Special Prize",
            organization: "National 3D Digital Innovation Design Competition Organizing Committee / National Manufacturing Informatization Training Center / Beijing Guanghua Design Foundation",
            date: "2025",
            news: "#"
        }
    ],
    zh: [
        {
            logo: "robomaster.png",
            name: "RoboMaster机甲大师 高校联盟赛 步兵对抗赛",
            prize: "全国一等奖",
            organization: "全国大学生机器人大赛组委会/大疆创新",
            date: "2025年",
            news: "#"
        },
        {
            logo: "craic.png",
            name: "中国机器人及人工智能大赛",
            prize: "全国二等奖",
            organization: "中国机器人及人工智能大赛组委会",
            date: "2025年",
            news: "#"
        },
        {
            logo: "raicom.png",
            name: "睿抗全国机器人开发者大赛",
            prize: "全国二等奖",
            organization: "工业和信息化部人才交流中心",
            date: "2025年",
            news: "#"
        },
        {
            logo: "hzsk.png",
            name: "华中数控杯工业协作机器人及数字孪生技术创新应用专项赛",
            prize: "湖北省特等奖",
            organization: "全国三维数字化创新设计大赛组委会/国家制造业信息化培训中心/北京光华设计发展基金会",
            date: "2025年",
            news: "#"
        }
    ]
};

// 发表论文数据（示例）
const publicationsData = {
    en: [
        // 可以添加论文数据
    ],
    zh: [
        // 可以添加论文数据
    ]
};

// 期刊论文数据（示例）
const journalData = {
    en: [
        // 可以添加期刊论文数据
    ],
    zh: [
        // 可以添加期刊论文数据
    ]
};

const translations = {
    zh: {
        "nav-about": "关于我",
        "nav-education": "教育经历",
        "nav-awards": "获奖经历",
        "nav-publications": "发表论文",
        "nav-journal": "期刊论文",
        name: "周明杨",
        title: "空间信息与数字技术专业 本科生",
        institution: "武汉大学 遥感信息工程学院",
        "github-link": "GitHub",
        "scholar-link": "谷歌学术",
        "linkedin-link": "领英",
        "about-title": "关于我",
        "about-content1": "我是武汉大学遥感信息工程学院空间信息与数字技术专业本科生，预计2026年毕业。目前已推免保研至武汉大学测绘遥感全国重点实验室，预计研究方向为无人系统自主定位与感知，在李由教授的指导下开展相关研究工作。",
        "about-content2": "本科期间就读于空间信息与数字技术专业，积极参与多项大学生机器人赛事，均获得国家级奖项，在此过程中，学习积累了丰富的机器人开发知识与经验。",
        "about-content3": "我希望通过严谨的研究和创新为我国机器人领域的发展做出贡献。",
        "about-interests": "研究兴趣：人工智能、机器人开发、建图导航与定位",
        "education-title": "教育经历",
        "awards-title": "获奖经历",
        "publications-title": "发表论文",
        "journal-title": "期刊论文",
        "theme-toggle": "🌓",
        "lang-toggle": "🌐",
        "page-title": "周明杨 - 个人学术主页",
        "nav-brand": "周明杨",
        "footer-text": "© 2024 周明杨. 个人学术主页 | 最后更新: 2024年4月",
        "news-link": "新闻链接"
    },
    en: {
        "nav-about": "About",
        "nav-education": "Education",
        "nav-awards": "Awards",
        "nav-publications": "Publications",
        "nav-journal": "Journal Papers",
        name: "Mingyang Zhou",
        title: "Undergraduate in Spatial Information and Digital Technology",
        institution: "School of Remote Sensing and Information Engineering, Wuhan University",
        "github-link": "GitHub",
        "scholar-link": "Google Scholar",
        "linkedin-link": "LinkedIn",
        "about-title": "About Me",
        "about-content1": "I am an undergraduate student majoring in Spatial Information and Digital Technology at the School of Remote Sensing and Information Engineering, Wuhan University, expected to graduate in 2026. I have been recommended for postgraduate studies at the National Key Laboratory of Surveying, Mapping and Remote Sensing, Wuhan University, with a research focus on autonomous positioning and perception of unmanned systems under the guidance of Professor Li You.",
        "about-content2": "During my undergraduate studies in Spatial Information and Digital Technology, I actively participated in multiple university robotics competitions and won national-level awards. Through these experiences, I have acquired extensive knowledge and experience in robotics development.",
        "about-content3": "I aspire to contribute to the development of robotics in China through rigorous research and innovation.",
        "about-interests": "Research Interests: Artificial Intelligence, Robotics Development, SLAM and Localization",
        "education-title": "Education",
        "awards-title": "Awards & Honors",
        "publications-title": "Publications",
        "journal-title": "Journal Papers",
        "theme-toggle": "🌓",
        "lang-toggle": "🌐",
        "page-title": "Mingyang Zhou - Personal Academic Page",
        "nav-brand": "Mingyang Zhou",
        "footer-text": "© 2024 Mingyang Zhou. Personal Academic Page | Last Updated: April 2024",
        "news-link": "News Link"
    }
};

// Initialize page content on load
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage(currentLang);
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Language toggle functionality
const langToggle = document.getElementById('lang-toggle');

function updatePageLanguage(lang) {
    // Update page title
    document.getElementById('page-title').textContent = translations[lang]['page-title'];
    
    // Update navigation
    document.getElementById('nav-brand').textContent = translations[lang]['nav-brand'];
    document.getElementById('nav-about').textContent = translations[lang]["nav-about"];
    document.getElementById('nav-education').textContent = translations[lang]["nav-education"];
    document.getElementById('nav-awards').textContent = translations[lang]["nav-awards"];
    document.getElementById('nav-publications').textContent = translations[lang]["nav-publications"];
    document.getElementById('nav-journal').textContent = translations[lang]["nav-journal"];
    
    // Update profile section
    document.getElementById('name').textContent = translations[lang].name;
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('institution').textContent = translations[lang].institution;
    document.getElementById('github-link').textContent = translations[lang]['github-link'];
    document.getElementById('scholar-link').textContent = translations[lang]['scholar-link'];
    document.getElementById('linkedin-link').textContent = translations[lang]['linkedin-link'];
    
    // Update about section
    document.getElementById('about-title').textContent = translations[lang]['about-title'];
    document.getElementById('about-content1').textContent = translations[lang]['about-content1'];
    document.getElementById('about-content2').textContent = translations[lang]['about-content2'];
    document.getElementById('about-content3').textContent = translations[lang]['about-content3'];
    document.getElementById('about-interests').textContent = translations[lang]['about-interests'];
    
    // Update section titles
    document.getElementById('education-title').textContent = translations[lang]['education-title'];
    document.getElementById('awards-title').textContent = translations[lang]['awards-title'];
    document.getElementById('publications-title').textContent = translations[lang]['publications-title'];
    document.getElementById('journal-title').textContent = translations[lang]['journal-title'];
    
    // Update footer
    document.getElementById('footer-text').textContent = translations[lang]['footer-text'];
    
    // Update control buttons
    document.getElementById('theme-toggle').textContent = translations[lang]['theme-toggle'];
    document.getElementById('lang-toggle').textContent = translations[lang]['lang-toggle'];
    
    // Update education section
    updateEducationSection(lang);
    
    // Update awards section
    updateAwardsSection(lang);
    
    // Update publications section
    updatePublicationsSection(lang);
    
    // Update journal section
    updateJournalSection(lang);
}

function updateEducationSection(lang) {
    const educationList = document.getElementById('education-list');
    educationList.innerHTML = '';
    
    educationData[lang].forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';
        
        let detailsHTML = '';
        edu.details.forEach(detail => {
            detailsHTML += `<div>${detail}</div>`;
        });
        
        eduItem.innerHTML = `
            <div class="time">${edu.time}</div>
            <div class="institution">${edu.institution}</div>
            <div>${edu.degree}</div>
            ${detailsHTML}
        `;
        
        educationList.appendChild(eduItem);
    });
}

function updateAwardsSection(lang) {
    const awardsList = document.getElementById('awards-list');
    awardsList.innerHTML = '';
    
    awardsData[lang].forEach(award => {
        const awardItem = document.createElement('div');
        awardItem.className = 'award-item';
        
        awardItem.innerHTML = `
            <div class="award-logo">
                <img src="src/${award.logo}" alt="${award.name}" onerror="this.style.display='none'">
            </div>
            <div class="award-content">
                <h3 class="award-name">${award.name}</h3>
                <div class="award-prize">${award.prize}</div>
                <div class="award-organization">${award.organization}</div>
                <div class="award-date">${award.date}</div>
                <a href="${award.news}" class="award-news">${translations[lang]['news-link']}</a>
            </div>
        `;
        
        awardsList.appendChild(awardItem);
    });
}

function updatePublicationsSection(lang) {
    const publicationsList = document.getElementById('publications-list');
    publicationsList.innerHTML = '';
    
    // 如果有论文数据，可以在这里处理
    if (publicationsData[lang].length > 0) {
        // 处理论文数据
    } else {
        publicationsList.innerHTML = '<p>Currently no publications available.</p>';
    }
}

function updateJournalSection(lang) {
    const journalList = document.getElementById('journal-list');
    journalList.innerHTML = '';
    
    // 如果有期刊论文数据，可以在这里处理
    if (journalData[lang].length > 0) {
        // 处理期刊论文数据
    } else {
        journalList.innerHTML = '<p>Currently no journal papers available.</p>';
    }
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updatePageLanguage(currentLang);
});

// 平滑滚动功能
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