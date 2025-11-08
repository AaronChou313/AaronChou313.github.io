// Simple markdown to HTML renderer
class MarkdownRenderer {
    // Convert markdown text to HTML
    static render(markdown) {
        if (!markdown) return '';
        
        let html = markdown;
        
        // Convert code blocks with language support (before other processing)
        html = html.replace(/```(\w*)\n([\s\S]*?)\n```/g, (match, lang, code) => {
            if (lang) {
                return `<pre><code class="language-${lang}">${this.escapeHtml(code.trim())}</code></pre>`;
            }
            return `<pre><code>${this.escapeHtml(code.trim())}</code></pre>`;
        });
        
        // Convert horizontal rules
        html = html.replace(/^\s*[-*_]{3,}\s*$/gim, '<hr>');
        
        // Convert headers (with inline formatting support)
        html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
        html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
        html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        
        // Convert blockquotes
        html = html.replace(/^\s*> (.*)$/gim, '<blockquote>$1</blockquote>');
        
        // Convert lists (both ordered and unordered)
        html = this.convertLists(html);
        
        // Convert bold text (both ** and __ syntax)
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
        
        // Convert italic text (both * and _ syntax)
        html = html.replace(/(\*)\b(.*?)\b\1/g, '<em>$2</em>');
        html = html.replace(/(_)\b(.*?)\b\1/g, '<em>$2</em>');
        
        // Convert strikethrough
        html = html.replace(/~~(.*?)~~/g, '<del>$1</del>');
        
        // Convert inline code
        html = html.replace(/`(.*?)`/g, '<code>$1</code>');
        
        // Convert links with title support
        html = html.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/g, (match, text, url, title) => {
            if (title) {
                return `<a href="${url}" title="${title}" target="_blank">${text}</a>`;
            }
            return `<a href="${url}" target="_blank">${text}</a>`;
        });
        
        // Convert images with title support
        html = html.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/g, (match, alt, src, title) => {
            if (title) {
                return `<img src="${src}" alt="${alt}" title="${title}">`;
            }
            return `<img src="${src}" alt="${alt}">`;
        });
        
        // Convert paragraphs
        html = this.convertParagraphs(html);
        
        // Handle line breaks
        html = html.replace(/\n\n/g, '<br>');
        
        // Clean up empty paragraphs
        html = html.replace(/<p>\s*<\/p>/g, '');
        
        // Clean up extra br tags
        html = html.replace(/<br\s*\/?>/gi, '<br>');
        html = html.replace(/(<br>)+$/, '');
        
        return html;
    }
    
    // Escape HTML characters
    static escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        
        return text.replace(/[&<>"']/g, m => map[m]);
    }
    
    // Convert lists (both ordered and unordered)
    static convertLists(html) {
        const lines = html.split('\n');
        const result = [];
        let inList = false;
        let listType = null; // 'ul' or 'ol'
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            // Check for unordered list items
            if (/^\s*[*+-]\s/.test(line)) {
                if (!inList || listType !== 'ul') {
                    if (inList) {
                        result.push(`</${listType}>`);
                    }
                    result.push('<ul>');
                    inList = true;
                    listType = 'ul';
                }
                const content = line.replace(/^\s*[*+-]\s/, '');
                result.push(`<li>${content}</li>`);
            }
            // Check for ordered list items
            else if (/^\s*\d+\.\s/.test(line)) {
                if (!inList || listType !== 'ol') {
                    if (inList) {
                        result.push(`</${listType}>`);
                    }
                    result.push('<ol>');
                    inList = true;
                    listType = 'ol';
                }
                const content = line.replace(/^\s*\d+\.\s/, '');
                result.push(`<li>${content}</li>`);
            }
            // Not a list item
            else {
                if (inList) {
                    result.push(`</${listType}>`);
                    inList = false;
                    listType = null;
                }
                result.push(line);
            }
        }
        
        // Close list if still open
        if (inList) {
            result.push(`</${listType}>`);
        }
        
        return result.join('\n');
    }
    
    // Convert paragraphs while avoiding those inside other elements
    static convertParagraphs(html) {
        // Split by double newlines to get blocks
        const blocks = html.split('\n\n');
        const processedBlocks = [];
        
        for (const block of blocks) {
            // Skip if already wrapped in a block element
            if (block.trim() !== '' && 
                !/^<\/?(h|ul|ol|li|blockquote|pre|hr)/.test(block.trim())) {
                // Wrap in paragraph tags
                processedBlocks.push(`<p>${block.trim()}</p>`);
            } else {
                processedBlocks.push(block);
            }
        }
        
        return processedBlocks.join('\n\n');
    }
    
    // Load and render markdown file
    static async loadAndRender(mdPath) {
        try {
            const response = await fetch(mdPath);
            if (!response.ok) {
                throw new Error(`Failed to load markdown file: ${mdPath} (Status: ${response.status})`);
            }
            const markdown = await response.text();
            return this.render(markdown);
        } catch (error) {
            console.error('Error loading or rendering markdown:', error);
            return `<p>Error loading content: ${error.message}</p>`;
        }
    }
}