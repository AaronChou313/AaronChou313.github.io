# Academic Personal Homepage

This is a responsive, static academic homepage designed for researchers and students to showcase their profile, experience, publications, awards, and projects.

## Features

- Responsive design that works on mobile, tablet, and desktop devices
- Light/dark theme toggle with automatic system preference detection
- Single Page Application (SPA) architecture with dynamic content loading
- Modular structure with reusable components
- JSON-based configuration for easy content updates
- Markdown-based content management
- Dynamic loading of sidebar content from configuration files
- Dynamic loading of works/projects from configuration files
- Dynamic loading of experience (Education, Research, Occupation) from configuration files
- Dynamic loading of publications from configuration files with image support
- Dynamic loading of awards from configuration files with image and news link support
- Dynamic loading of about content from configuration files
- Grayscale color scheme (black and white) for a professional academic look
- Work details loaded dynamically from Markdown files
- Fast loading static pages

## Structure

```
├── index.html              # Main SPA page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── main.js             # JavaScript functionality
│   ├── loadSidebar.js      # Dynamic sidebar loading
│   ├── loadNavbar.js       # Dynamic navbar loading
│   ├── loadWorks.js        # Dynamic works loading
│   ├── loadExperience.js   # Dynamic experience loading
│   ├── loadPublications.js # Dynamic publications loading
│   ├── loadAwards.js       # Dynamic awards loading
│   ├── contentRouter.js    # SPA content router
│   ├── markdownRenderer.js # Markdown to HTML renderer
│   └── markdown.js         # Simple markdown parser
├── config/
│   ├── site-config.json    # Site configuration
│   ├── works-config.json   # Works configuration
│   ├── experience-config.json # Experience configuration (Education, Research, Occupation)
│   ├── publications-config.json # Publications configuration
│   ├── awards-config.json  # Awards configuration
│   └── about-config.json   # About configuration
├── content/
│   ├── about.md            # About page content
│   ├── experience.md       # Experience page content
│   ├── publications.md     # Publications page content
│   ├── awards.md           # Awards page content
│   └── works.md            # Works page content
├── assets/
│   ├── images/             # Image assets
├── components/             # Reusable components (planned)
├── works/                  
│   ├── work-detail.html    # Work detail page template
│   └── markdown/           # Work detail content in markdown format
└── blogs/                  # Blog posts (planned)
```

## Running Locally

Because of browser security policies (CORS), you cannot directly open the HTML files in your browser. You need to run a local server to view the website properly.

### Option 1: Using Node.js (Recommended)

If you have Node.js installed:

1. Run the local server:
   ```
   node server.js
   ```

2. Open your browser and navigate to `http://127.0.0.1:8080`

### Option 2: Using Python

If you have Python installed:

For Python 3:
```
python -m http.server 8080
```

For Python 2:
```
python -m SimpleHTTPServer 8080
```

Then open your browser and navigate to `http://127.0.0.1:8080`

### Option 3: Using VS Code Live Server Extension

If you're using VS Code, you can install the "Live Server" extension and use it to serve your website.

## Customization

### Updating Personal Information

Edit [config/site-config.json](config/site-config.json) to update your personal information and social links.

### Updating About Content

Edit [config/about-config.json](config/about-config.json) to update your about page content.

The about section has the following fields:
- `introduction`: A brief introduction paragraph
- `researchInterests`: An array of research interest items

Edit [content/about.md](content/about.md) to update the structure and static content of the about page.

### Updating Experience

Edit [config/experience-config.json](config/experience-config.json) to update your experience information.

The experience is categorized into three sections:
1. Education - Educational background
2. Research - Research experience
3. Occupation - Work experience

Each category has its own array of items with the following fields:
- `id`: Unique identifier
- `title/degree`: Position title or degree name
- `organization/institution`: Company, institution or university
- `mentors`: Mentors or supervisors (optional)
- `description`: Description of responsibilities or work
- `startDate`: Start date
- `endDate`: End date or "Present"

Edit [content/experience.md](content/experience.md) to update the structure and static content of the experience page.

### Updating Publications

Edit [config/publications-config.json](config/publications-config.json) to update your publications.

Each publication has the following fields:
- `id`: Unique identifier
- `title`: Publication title
- `authors`: Array of authors
- `journal`: Journal or conference name
- `year`: Publication year
- `img`: Path to publication image (optional)
- `links`: Array of links (PDF, DOI, Code, etc.)

Edit [content/publications.md](content/publications.md) to update the structure and static content of the publications page.

### Updating Awards

Edit [config/awards-config.json](config/awards-config.json) to update your awards and honors.

Each award has the following fields:
- `id`: Unique identifier
- `title`: Award title
- `organization`: Awarding organization
- `date`: Award date
- `description`: Award description
- `img`: Path to award image (optional)
- `news`: News link for the award (optional)

Edit [content/awards.md](content/awards.md) to update the structure and static content of the awards page.

### Updating Works/Projects

Edit [config/works-config.json](config/works-config.json) to update your works and projects.

Each work/project can have a detailed description stored in a separate Markdown file in the [works/markdown/](works/markdown/) directory.

To add a new work:
1. Create a new Markdown file in [works/markdown/](works/markdown/) with the work details
2. Add an entry in [config/works-config.json](config/works-config.json) with the work information and path to the Markdown file
3. Add any images to [assets/images/](assets/images/) if needed

Edit [content/works.md](content/works.md) to update the structure and static content of the works page.

### Changing Theme

The site automatically detects your system preference for light or dark mode. You can also manually toggle between themes using the sun/moon icon in the navigation bar.

The website uses a professional grayscale color scheme that is appropriate for academic contexts.

### Adding Content

To add new content:
1. Create a new Markdown file in the [content/](content/) directory
2. Update the navigation in [config/site-config.json](config/site-config.json) to include the new page
3. Add corresponding styles in [css/style.css](css/style.css) if needed
4. Update configuration files as needed

## Deployment

To deploy this website:
1. Fork this repository
2. Customize the content to your needs
3. Enable GitHub Pages in your repository settings
4. Select the branch you want to deploy from

## Browser Support

This website works on all modern browsers that support CSS variables and ES6 JavaScript features:
- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+

## License

This project is open source and available under the MIT License.