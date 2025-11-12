#  Academic Website Template Designed by Aaron Chou

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Quick Start

⚠️ **IMPORTANT: Use as Template, Don't Fork!**

**DO NOT FORK** this repository directly. Forking will copy all development branches, which is unnecessary and not recommended.

### To create your personal website:

1. Click the **"Use this template"** button at the top right of this page
2. Select **"Create a new repository"**
3. Name your repository: `your-github-username.github.io`
4. Clone your new repository locally

### Deploy your website:

1. Go to your repository's **Settings** → **Pages**
2. Under **Source**, select **"Deploy from a branch"**
3. Choose **Branch**: `master` and **Folder**: `/ (root)`
4. Click **Save**
5. Your website will be live at `https://your-github-username.github.io`

### Customize:

Replace the template content on the `master` branch with your own information. The website will automatically rebuild and deploy your changes.

## Demo

Check out the live demo to see how the website looks and functions: [aaronchou313.github.io](https://aaronchou313.github.io)

❗**Note:** This demo website is Aaron Chou's official academic website, but you can use it to preview the template's functionality and design.

### Page Previews

Below are screenshots showing the different pages of the template:

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <figure style="text-align: center; margin: 10px;">
    <img src="assets/images/demo/about_demo.jpg" alt="About Page Demo" width="200">
    <figcaption>About Page</figcaption>
  </figure>
  
  <figure style="text-align: center; margin: 10px;">
    <img src="assets/images/demo/experience_demo.jpg" alt="Experience Page Demo" width="200">
    <figcaption>Experience Page</figcaption>
  </figure>
  
  <figure style="text-align: center; margin: 10px;">
    <img src="assets/images/demo/publications_demo.jpg" alt="Publications Page Demo" width="200">
    <figcaption>Publications Page</figcaption>
  </figure>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <figure style="text-align: center; margin: 10px;">
    <img src="assets/images/demo/awards_demo.jpg" alt="Awards Page Demo" width="200">
    <figcaption>Awards Page</figcaption>
  </figure>
  
  <figure style="text-align: center; margin: 10px;">
    <img src="assets/images/demo/works_demo.jpg" alt="Works Page Demo" width="200">
    <figcaption>Works Page</figcaption>
  </figure>
  
  <figure style="text-align: center; margin: 10px;">
    <img src="assets/images/demo/work_detail_demo.jpg" alt="Work Detail Page Demo" width="200">
    <figcaption>Work Detail Page</figcaption>
  </figure>
</div>

## Local Development

For local development and testing, you can use VS Code with the Live Server extension:

1. Install the "Live Server" extension in VS Code
2. Open [index.html](index.html) in VS Code
3. Right-click anywhere in the editor
4. Select "Open with Live Server"
5. Your browser will automatically open and display the website

This method allows you to preview changes in real-time during development without deploying to GitHub Pages.

## Responsive Design
This website supports responsive design and can be accessed normally on mobile devices. However, for the best viewing experience, we recommend accessing it on a PC.

## Customization Guide

### Configuration Files

All personal information is stored in the `config` directory. Modify these JSON files to customize your website:

- `basic-config.json`: Site title, description, and basic metadata
- `navigation-config.json`: Navigation menu configuration
- `profile-config.json`: Personal information, motto, and social links
- `experience-config.json`: Education, research, and work experience
- `awards-config.json`: Honors and awards
- `publications-config.json`: Publications and research works
- `works-config.json`: Projects and portfolio items

### Content Management

Page content is stored as markdown files in the `content` directory:

- Main pages are directly in the `content` folder
- Project details are in the `content/works` subfolder

### Media Assets

Replace images in the `assets/images` directory:
- `assets/images/award`: Images for awards/honors
- `assets/images/publication`: Images for publications
- `assets/images/work`: Images for projects and works

## Adding or Removing Pages

### To Add a New Page:
1. Add a new entry in `config/navigation-config.json`
2. Create a corresponding markdown file in the `content` directory

### To Remove a Page:
1. Remove the entry from `config/navigation-config.json`
2. Delete the corresponding markdown file from the `content` directory

## Managing Projects/Works

### To Add a New Project:
1. Add a new entry in `config/works-config.json`
2. Create a detailed markdown file in `content/works` directory

### To Remove a Project:
1. Remove the entry from `config/works-config.json`
2. Delete the corresponding markdown file from `content/works` directory

## Technical Architecture

The website is built as a single-page application where different content sections are dynamically loaded:

- Main entry point: `index.html`
- Navigation logic: When users click on menu items, the corresponding markdown content is loaded and rendered in the main content area
- JavaScript modules handle routing, content loading, and dynamic rendering

This architecture allows for a seamless user experience while maintaining the simplicity of static site hosting through GitHub Pages.

## Project Structure

```
├─assets
│  ├─icons
│  └─images
│      ├─award
│      ├─publication
│      └─work
├─config
├─content
│  └─works
├─css
└─js
```

## Detailed Directory and File Structure

### `/assets` - Media and Static Resources

#### `/assets/icons` - Icon Resources
Contains SVG icon files used throughout the website for social links and informational elements

#### `/assets/images` - Image Resources
Contains categorized images used in different sections of the website:

##### `/assets/images/award` - Award Section Images
Images related to honors, awards, and recognitions received

##### `/assets/images/publication` - Publication Section Images
Images related to research publications, papers, and academic works

##### `/assets/images/work` - Work Section Images
Project and portfolio images, including:
- Work thumbnails displayed in the main works grid
- Detailed project images shown on individual work pages
- GIF demonstrations of robot projects and other technical works

### `/config` - Configuration Files
JSON configuration files that control website content and structure:
- [awards-config.json](config/awards-config.json) - Configuration for awards/honors section
- [basic-config.json](config/basic-config.json) - Basic site metadata (title, description, author)
- [experience-config.json](config/experience-config.json) - Education, research, and work experience information
- [navigation-config.json](config/navigation-config.json) - Navigation menu structure and page routing
- [profile-config.json](config/profile-config.json) - Personal profile information (bio, contact, social links)
- [publications-config.json](config/publications-config.json) - Research publications and academic works
- [works-config.json](config/works-config.json) - Portfolio projects and technical works

### `/content` - Content Files
Markdown files containing the main content for each page:

#### `/content/works` - Individual Work Details
Detailed markdown files for each portfolio project:
- [fruit-picking-robot.md](content/works/fruit-picking-robot.md)(for instance) - Autonomous fruit harvesting robot project

Other content files:
- [works.md](content/works.md) - Main works/portfolio page that dynamically loads project grid
- Other section content files (About, Experience, Publications, Awards, etc.)

### `/css` - Stylesheets
Cascading Style Sheets that control the visual appearance:
- [awards.css](css/awards.css) - Styles specific to the awards section
- [base.css](css/base.css) - Base styles and CSS variables (colors, themes)
- [content.css](css/content.css) - Main content area styles
- [experience.css](css/experience.css) - Experience section styles
- [layout.css](css/layout.css) - Overall page layout styles
- [markdown.css](css/markdown.css) - Markdown content rendering styles
- [navigation.css](css/navigation.css) - Navigation bar and menu styles
- [publications.css](css/publications.css) - Publications section styles
- [sidebar.css](css/sidebar.css) - Sidebar/profile section styles
- [style.css](css/style.css) - Main stylesheet that combines all other styles
- [timeline.css](css/timeline.css) - Timeline component styles (used in experience section)
- [works.css](css/works.css) - Works/portfolio section styles

### `/js` - JavaScript Files
Client-side scripts that power the single-page application functionality:
- [contentRouter.js](js/contentRouter.js) - Main routing system that loads different content based on URL
- [loadAwards.js](js/loadAwards.js) - Dynamically loads and renders awards data from config
- [loadExperience.js](js/loadExperience.js) - Loads and displays experience information
- [loadNavbar.js](js/loadNavbar.js) - Loads and manages navigation menu
- [loadPublications.js](js/loadPublications.js) - Renders publications from configuration data
- [loadSidebar.js](js/loadSidebar.js) - Loads profile information in the sidebar
- [loadWorkDetail.js](js/loadWorkDetail.js) - Loads detailed work/project pages
- [loadWorks.js](js/loadWorks.js) - Loads and displays works/portfolio grid
- [main.js](js/main.js) - Main application entry point, handles theme switching and basic setup
- [markdownRenderer.js](js/markdownRenderer.js) - Renders markdown content to HTML

### Root Level Files
- [index.html](index.html) - Main HTML file and entry point for the website
- [README.md](README.md) - Project documentation and setup instructions
- `.gitignore` - Git ignore file specifying untracked files
- Other configuration files (favicon.ico, robots.txt, etc.)

## Architecture Overview

This is a single-page application (SPA) built with vanilla JavaScript that dynamically loads content based on URL parameters. The architecture separates concerns through:

1. **Configuration-driven content**: Most content is stored in JSON config files
2. **Markdown-based pages**: Detailed content is written in markdown format
3. **Component-based loading**: Each section has dedicated JavaScript loaders
4. **Centralized routing**: ContentRouter.js manages page navigation and content loading
5. **Modular styling**: CSS is organized by section for maintainability
6. **Static asset organization**: Images and icons are categorized by usage

The website is designed to be easily forked and customized, with all personal information contained in the config files and content directories.