# 个人学术主页模板

这是一个简洁、现代化的个人学术主页模板，支持亮暗模式切换、中英文切换和主题色自定义。你可以快速克隆本仓库并进行简单配置，即可拥有一个属于自己的个人学术主页。

在线预览：[aaronchou313.github.io](https://aaronchou313.github.io)

## 特性

- 🌗 亮暗模式切换
- 🌍 中英文双语支持
- 🎨 多种主题色可选
- 📱 响应式设计，适配各种设备
- ⚙️ 配置简单，易于定制
- 📝 模块化设计，便于扩展

## 快速开始

### 1. 克隆仓库

```bash
# 克隆本仓库
git clone https://github.com/AaronChou313/AaronChou313.github.io.git
cd AaronChou313.github.io
```

### 2. 创建你的GitHub Pages仓库

1. 在GitHub上创建一个新的仓库，命名为 `你的用户名.github.io`
2. 将本仓库连接到你的新仓库：
```bash
git remote set-url origin https://github.com/你的用户名/你的用户名.github.io.git
```

### 3. 推送代码

```bash
git push -u origin main
```

### 4. 启用GitHub Pages

1. 进入你的仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中找到 "Pages"
4. 在 "Branch" 选项中选择 `main`，目录选择 `/root`
5. 点击 "Save"
6. 等待几分钟，你的网站将在 `https://你的用户名.github.io` 上线

## 自定义配置

要将模板修改为你自己的个人主页，只需修改以下文件：

### 1. 配置文件 (config.js)

编辑 [config.js](./config.js) 文件来配置你的个人信息：

- 个人信息 (personalInfo)
- 自我介绍 (aboutContent)
- 教育和工作经历 (experienceData)
- 论文信息 (papersData)
- 获奖经历 (awardsData)
- 分享链接 (sharingData)
- 社交链接 (socialLinks)
- 主题颜色 (themeColors)

### 2. 替换图片 (src文件夹)

替换 `src` 文件夹中的图片文件：

- `src/profile.jpg` - 个人头像
- `src/github.svg`, `src/gitee.svg` 等 - 社交链接图标
- 论文图片、获奖图片等

### 3. 调整颜色主题

在 [config.js](./config.js) 中修改 `defaultColor` 来设置默认主题色，可选值包括：
- [color1](./config.js#L7-L13) (蓝色)
- [color2](./config.js#L14-L20) (绿色)
- [color3](./config.js#L21-L27) (紫色)
- [color4](./config.js#L28-L34) (橙色)
- [color5](./config.js#L35-L41) (红色)
- [color6](./config.js#L42-L48) (蓝绿色)

## 项目结构

```
.
├── index.html          # 主页面
├── config.js           # 配置文件
├── script.js           # 主要JavaScript逻辑
├── style.css           # 样式文件
├── src/                # 图片资源文件夹
│   ├── profile.jpg     # 个人头像
│   ├── github.svg      # GitHub图标
│   └── ...             # 其他图片资源
└── README.md           # 说明文档
```

## 技术栈

- HTML5
- CSS3 (包含CSS变量和Flexbox)
- 原生JavaScript (ES6+)
- 响应式设计

## 贡献

欢迎提交Issue和Pull Request来帮助改进这个模板。

## 许可证

本项目基于MIT许可证开源，详情请查看 [LICENSE](LICENSE) 文件。

## 致谢

感谢所有使用和贡献这个模板的开发者。如果你觉得这个模板有帮助，请给个Star ⭐
