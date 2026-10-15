# AaronChou313 · 项目导航

[访问站点](https://aaronchou313.github.io/) · [GitHub 账号](https://github.com/AaronChou313)

一站式访问公开项目、网页工具和学习笔记。纯 HTML / CSS / JavaScript，使用 GitHub Pages 从 `master` 根目录发布，无需安装依赖或构建。

- **网页工具**：在浏览器中使用的交互应用。
- **学习笔记**：课程笔记、研究知识库与教程适配；优先进入阅读站或本仓库的课程首页。
- **项目**：开源软件、开发工具、机器人、游戏和课程工程；可访问已核对的站点，或查看源码与运行说明。

每个仓库只在主目录中出现一次，支持全目录搜索、分类、仅看在线入口、清除筛选、中英切换和系统深浅主题。原学术主页、AI 学习站与 `#pages` / `#repositories` 入口保留。

## 数据维护

`projects.json` 是发布的数据快照。浏览器不调用 GitHub API，API 限流不会影响目录显示。只收录账号的**公开仓库**，包括派生仓库；已删除或不再公开的仓库会在同步时移除。

```sh
# 需要已安装 GitHub CLI（gh），从公开 API 分页获取当前账号下的仓库
python3 scripts/sync-projects.py
python3 scripts/validate-projects.py
node --check app.js
git diff --check
```

同步保留人工维护的 `category`、`title`、`description_zh` / `description_en`、`web_url`、`read_url` 和 `featured`。新增仓库暂归入项目区，需核对用途、双语简介和在线入口。仓库 ID 用于后续重命名时延续分类。

- `category`：`projects` / `tools` / `notes`。
- `web_url`：经实际访问确认的在线站点；不从 `homepage` 自动推断，避免派生仓库指向上游。
- `read_url`：没有独立站点时可直达的本仓库文档。Happy-LLM 使用本仓库的 `docs/README.md`，上游教程地址只作为 GitHub 原始元数据保留。
- `featured`：是否出现在快速开始区域。
- `pushed_at`：代码更新时间，用于排序；`site.synced_at` 是目录同步时间。

更新后检查 Git diff，提交并推送到 `master` 即由 GitHub Pages 发布。GitHub Actions 同时验证数据结构、JavaScript 语法和空白错误。

## 本地预览

```sh
python3 -m http.server 8000
```

浏览器访问 `http://localhost:8000`。不要直接双击 HTML：浏览器可能阻止 `file://` 下读取 JSON。数据读取失败时页面提供重试入口。
