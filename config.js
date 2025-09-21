// config.js - 个人信息和内容配置文件

// 默认颜色配置
const defaultColor = 'color1'; // 可选值: 'color1', 'color2', 'color3', 'color4', 'color5', 'color6'

// 主题颜色配置
const themeColors = {
    color1: {
        name: {
            en: "Blue",
            zh: "蓝色"
        },
        color: "#4a6fa5"
    },
    color2: {
        name: {
            en: "Green",
            zh: "绿色"
        },
        color: "#2e7d32"
    },
    color3: {
        name: {
            en: "Purple",
            zh: "紫色"
        },
        color: "#5e35b1"
    },
    color4: {
        name: {
            en: "Orange",
            zh: "橙色"
        },
        color: "#ef6c00"
    },
    color5: {
        name: {
            en: "Red",
            zh: "红色"
        },
        color: "#c62828"
    },
    color6: {
        name: {
            en: "Teal",
            zh: "蓝绿色"
        },
        color: "#00838f"
    }
};

// 个人信息配置
const personalInfo = {
    name: {
        en: "Mingyang Zhou",
        zh: "周明杨"
    },
    title: {
        en: "Undergraduate in Spatial Information and Digital Technology",
        zh: "空间信息与数字技术专业 本科生"
    },
    institution: {
        en: "School of Remote Sensing and Information Engineering, Wuhan University",
        zh: "武汉大学 遥感信息工程学院"
    },
    email: "zhoumy@whu.edu.cn",
    profileImage: "./src/profile.jpg"
};

// 自我介绍内容配置
const aboutContent = {
    en: {
        content1: "I am an undergraduate student majoring in Spatial Information and Digital Technology at the School of Remote Sensing and Information Engineering, Wuhan University, expected to graduate in 2026. I have been recommended for postgraduate studies at the National Key Laboratory of Surveying, Mapping and Remote Sensing, Wuhan University, with a research focus on autonomous positioning and perception of unmanned systems under the guidance of Professor Li You.",
        content2: "During my undergraduate studies in Spatial Information and Digital Technology, I actively participated in multiple university robotics competitions and won national-level awards. Through these experiences, I have acquired extensive knowledge and experience in robotics development.",
        content3: "I aspire to contribute to the development of robotics in China through rigorous research and innovation.",
        interests: "Research Interests: Artificial Intelligence, Robotics Development, SLAM and Localization"
    },
    zh: {
        content1: "我是武汉大学遥感信息工程学院空间信息与数字技术专业本科生，预计2026年毕业。目前已推免保研至武汉大学测绘遥感全国重点实验室，预计研究方向为无人系统自主定位与感知，在李由教授的指导下开展相关研究工作。",
        content2: "本科期间就读于空间信息与数字技术专业，积极参与多项大学生机器人赛事，均获得国家级奖项，在此过程中，学习积累了丰富的机器人开发知识与经验。",
        content3: "我希望通过严谨的研究和创新为我国机器人领域的发展做出贡献。",
        interests: "研究兴趣：人工智能、机器人开发、建图导航与定位"
    }
};

// 社交链接配置
const socialLinks = {
    github: {
        url: "https://github.com/AaronChou313",
        icon: "./src/github.svg",
        title: {
            en: "GitHub",
            zh: "GitHub"
        },
        visible: true  // 控制是否显示
    },
    gitee: {
        url: "https://gitee.com/aaron-chou313",
        icon: "./src/gitee.svg",
        title: {
            en: "Gitee",
            zh: "Gitee"
        },
        visible: true
    },
    scholar: {
        url: "#",
        icon: "./src/google-scholar.svg",
        title: {
            en: "Google Scholar",
            zh: "谷歌学术"
        },
        visible: true
    },
    orcid: {
        url: "#",
        icon: "./src/orcid.svg",
        title: {
            en: "ORCID",
            zh: "ORCID"
        },
        visible: true
    },
    resume: {
        url: "#",
        icon: "./src/resume.svg",
        title: {
            en: "Resume",
            zh: "个人简历"
        },
        visible: true
    }
};

// 教育和工作经历配置
const experienceData = {
    common: {
        education: [
            {
                time: "2022.09 - 2026.06",
                institution: {
                    en: "School of Remote Sensing and Information Engineering, Wuhan University",
                    zh: "武汉大学 遥感信息工程学院"
                },
                major: {
                    en: "Spatial Information and Digital Technology",
                    zh: "空间信息与数字技术"
                },
                degree: {
                    en: "Bachelor's Degree",
                    zh: "学士 本科在读"
                },
                advisor: {},
                research: {},
                details: []
            },
        ],
        occupation: [
            // 示例工作经历
            // {
            //     time: "2024.07 - 2024.09",
            //     company: {
            //         en: "Example Company",
            //         zh: "示例公司"
            //     },
            //     type: {
            //         en: "Internship",
            //         zh: "实习"
            //     },
            //     position: {
            //         en: "Software Engineering Intern",
            //         zh: "软件工程实习生"
            //     },
            //     description: {
            //         en: "Developed web applications using React and Node.js",
            //         zh: "使用React和Node.js开发Web应用程序"
            //     }
            // },
        ]
    }
};

// 论文配置
const papersData = {
    common: {
        selected: [
            // {
            //     image: "paper1.png",
            //     title: {
            //         en: "Autonomous Navigation System for Mobile Robots in Dynamic Environments",
            //         zh: "动态环境下移动机器人的自主导航系统"
            //     },
            //     authors: ["**Spiderman**", "Captain America"],
            //     venue: "IEEE Transactions on Robotics (T-RO), 2025",
            //     description: {
            //         en: "This paper presents ...",
            //         zh: "本文提出了一种..."
            //     },
            //     links: {
            //         pdf: "#",
            //         cite: "#",
            //         slides: "#",
            //         video: "#"
            //     }
            // },
        ],
        other: [
            // {
            //     reference: {
            //         en: "Captain Marvel, Banner, **Spiderman**. Deep Learning Approaches for Object Detection in Aerial Images. Remote Sensing Journal, 2024.",
            //         zh: "惊奇队长, 班纳, **蜘蛛侠**. 航拍图像中目标检测的深度学习方法. 遥感学报, 2024."
            //     },
            //     links: {
            //         pdf: "#",
            //         cite: "#"
            //     }
            // },
        ]
    }
};

// 获奖经历配置
const awardsData = {
    common: [
        {
            name: {
                en: "RoboMaster University League - Infantry Duel",
                zh: "RoboMaster机甲大师 高校联盟赛 步兵对抗赛"
            },
            prize: {
                en: "National First Prize",
                zh: "全国一等奖"
            },
            organization: {
                en: "National University Robot Competition Organizing Committee / DJI Innovation",
                zh: "全国大学生机器人大赛组委会 / 大疆创新"
            },
            logo: "robomaster.png",
            date: "2025",
            news: "https://mp.weixin.qq.com/s/7cZJ-fV4WwXA3E49jD1Bvg"
        },
        {
            name: {
                en: "China Robotics and Artificial Intelligence Competition",
                zh: "中国机器人及人工智能大赛"
            },
            prize: {
                en: "National Second Prize",
                zh: "全国二等奖"
            },
            organization: {
                en: "China Robotics and Artificial Intelligence Competition Organizing Committee",
                zh: "中国机器人及人工智能大赛组委会"
            },
            logo: "craic.png",
            date: "2025",
            news: "#"
        },
        {
            name: {
                en: "RAICOM National Robot Developer Competition",
                zh: "睿抗全国机器人开发者大赛"
            },
            prize: {
                en: "National Second Prize",
                zh: "全国二等奖"
            },
            organization: {
                en: "Ministry of Industry and Information Technology Talent Exchange Center",
                zh: "工业和信息化部人才交流中心"
            },
            logo: "raicom.png",
            date: "2025",
            news: "https://mp.weixin.qq.com/s/TEq7Q20iFrmV68r2q15VFQ"
        },
        {
            name: {
                en: "Huazhong CNC Cup Industrial Collaborative Robot and Digital Twinning Technology Innovation Application Special Competition",
                zh: "华中数控杯工业协作机器人及数字孪生技术创新应用专项赛"
            },
            prize: {
                en: "Hubei Special Prize",
                zh: "湖北省特等奖"
            },
            organization: {
                en: "National 3D Digital Innovation Design Competition Organizing Committee / National Manufacturing Informatization Training Center / Beijing Guanghua Design Foundation",
                zh: "全国三维数字化创新设计大赛组委会 / 国家制造业信息化培训中心 / 北京光华设计发展基金会"
            },
            logo: "hzsk.png",
            date: "2025",
            news: "#"
        }
    ]
};

// 分享链接配置
const sharingData = {
    common: [
        {
            logo: "blog.png",
            name: {
                en: "Technical Blog",
                zh: "技术博客"
            },
            description: {
                en: "My personal blog for sharing technical insights and development experiences",
                zh: "分享技术见解和开发经验的个人博客"
            },
            link: "https://blog.csdn.net/qq_39599112",
            buttonText: {
                en: "Visit",
                zh: "访问"
            }
        },
        {
            logo: "project.png",
            name: {
                en: "Open Source Projects",
                zh: "开源项目"
            },
            description: {
                en: "Collection of open source projects I've developed and maintained",
                zh: "我开发和维护的开源项目集合"
            },
            link: "https://github.com/AaronChou313",
            buttonText: {
                en: "Visit",
                zh: "访问"
            }
        },
        {
            logo: "tutorial.png",
            name: {
                en: "Learning Resources",
                zh: "学习资源"
            },
            description: {
                en: "Curated learning resources and tutorials in my field of expertise",
                zh: "精选的学习资源和专业教程"
            },
            link: "https://www.yuque.com/zhoumingyang-mhzvi",
            buttonText: {
                en: "Visit",
                zh: "访问"
            }
        },
        {
            logo: "bilibili.png",
            name: {
                en: "Bilibili Channel",
                zh: "Bilibili频道"
            },
            description: {
                en: "My personal Bilibili channel for sharing development experience, sports life and daily life",
                zh: "个人Bilibili频道，分享开发经验、排球生活及日常"
            },
            link: "https://space.bilibili.com/43859485",
            buttonText: {
                en: "Visit",
                zh: "访问"
            }
        },
        {
            logo: "zhihu.png",
            name: {
                en: "ZhiHu",
                zh: "知乎"
            },
            description: {
                en: "My personal ZhiHu page for sharing technical insights and development experiences",
                zh: "个人知乎页面，分享技术见解和开发经验"
            },
            link: "#",
            buttonText: {
                en: "Visit",
                zh: "访问"
            }
        },
        {
            logo: "redbook.png",
            name: {
                en: "Red Book",
                zh: "小红书"
            },
            description: {
                en: "My personal Red Book page for sharing technical insights and development experiences",
                zh: "个人小红书页面，分享机器人比赛心得及学习经验"
            },
            link: "https://xhslink.com/m/6rRdddzHJ3u",
            buttonText: {
                en: "Visit",
                zh: "访问"
            }
        },
        {
            logo: "tiktok.png",
            name: {
                en: "TikTok",
                zh: "抖音"
            },
            description: {
                en: "My personal TikTok channel for sharing robot development and debugging daily, sports training and competition daily, and life daily",
                zh: "个人抖音频道，分享机器人开发与调试日常、排球训练与比赛日常、生活日常"
            },
            link: "https://v.douyin.com/aqZX-cfGJ1I",
            buttonText: {
                en: "Visit",
                zh: "访问"
            }
        },
    ]
};

// 翻译配置
const translations = {
    en: {
        // 页面标题和大字
        "page-title": "Mingyang Zhou - Personal Academic Page",
        "nav-brand": "Mingyang Zhou",
        
        // 导航栏
        "nav-about": "About",
        "nav-experience": "Experience", // 修改为 Experience
        "nav-papers": "Papers",
        "nav-awards": "Awards",
        "nav-sharing": "Sharing",
        
        // 社交链接
        "github-link": "GitHub",
        "gitee-link": "Gitee",
        "scholar-link": "Google Scholar",
        "orcid-link": "ORCID",
        "resume-link": "Resume",
        
        // 控制按钮
        "theme-toggle": "🌓",
        "lang-toggle": "🌐",
        "color-toggle": "🎨",
        
        // 各个板块标题
        "about-title": "About Me",
        "experience-title": "Experience", // 添加
        "education-experience-title": "Education", // 添加
        "occupation-experience-title": "Occupation", // 添加
        "papers-title": "Papers",
        "selected-papers-title": "Selected Papers",
        "other-papers-title": "Other Papers",
        "awards-title": "Awards & Honors",
        "sharing-title": "Sharing",
        
        // 论文按钮
        "pdf-button": "PDF",
        "cite-button": "CITE",
        "slides-button": "SLIDES",
        "video-button": "VIDEO",
        
        // 其他
        "news-link": "News Link",
        "footer-text": "© 2025 Mingyang Zhou. Personal Academic Page | Last Updated: September 2025"
    },
    zh: {
        // 页面标题和大字
        "page-title": "周明杨 - 个人学术主页",
        "nav-brand": "周明杨",
        
        // 导航栏
        "nav-about": "关于我",
        "nav-experience": "经历", // 修改为 经历
        "nav-papers": "论文发表",
        "nav-awards": "获奖经历",
        "nav-sharing": "其他分享",
        
        // 社交链接
        "github-link": "GitHub",
        "gitee-link": "Gitee",
        "scholar-link": "谷歌学术",
        "orcid-link": "ORCID",
        "resume-link": "个人简历",
        
        // 控制按钮
        "theme-toggle": "🌓",
        "lang-toggle": "🌐",
        "color-toggle": "🎨",
        
        // 各个板块标题
        "about-title": "关于我",
        "experience-title": "经历", // 添加
        "education-experience-title": "教育经历", // 添加
        "occupation-experience-title": "工作经历", // 添加
        "papers-title": "论文发表",
        "selected-papers-title": "精选论文",
        "other-papers-title": "其他论文",
        "awards-title": "获奖经历",
        "sharing-title": "其他分享",
        
        // 论文按钮
        "pdf-button": "PDF",
        "cite-button": "引用",
        "slides-button": "幻灯片",
        "video-button": "视频",
        
        // 其他
        "news-link": "新闻链接",
        "footer-text": "© 2025 周明杨. 个人学术主页 | 最后更新: 2025年9月"
    }
};

// 导出所有配置
const config = {
    defaultColor,
    themeColors,
    personalInfo,
    aboutContent,
    socialLinks,
    experienceData,
    papersData,
    awardsData,
    sharingData,
    translations
};
