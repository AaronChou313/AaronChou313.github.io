'use strict';
const USER = 'AaronChou313';
const categories = ['tools', 'notes', 'projects'];
const texts = {
  zh: {
    profile: 'GitHub 主页', tools: '网页工具', notes: '学习笔记', projects: '项目', all: '全部',
    repoCount: '公开仓库', pageCount: '在线站点', synced: '目录更新', quick: '快速开始',
    quickDesc: '打开工具，或者从一份笔记开始。', searchLabel: '搜索整个目录',
    searchPlaceholder: '搜索名称、用途、技术…', onlineOnly: '仅看在线入口', reset: '清除筛选',
    toolsDesc: '在浏览器中使用，探索、创作与学习。',
    notesDesc: '课程笔记、研究知识库与可复现的学习实践。',
    projectsDesc: '开源软件、开发工具、机器人与课程实践；从源码了解和运行。',
    noMatch: '没有找到匹配的内容，试试其他关键词。', loading: '正在加载目录…',
    footer: '公开项目目录 · GitHub Pages', skip: '跳至项目目录',
    open: '打开工具', read: '在线阅读', visit: '访问站点', course: '阅读课程',
    source: '源码', repo: '查看仓库', fork: '派生仓库', archived: '已归档', local: '源码项目',
    updated: '代码更新', results: (n, total) => `显示 ${n} / ${total} 个公开仓库`,
    error: '目录加载失败，请检查网络后重试。', retry: '重新加载', current: '本站',
    title: '项目导航', noDescription: '前往仓库了解详情。', categoryLabel: '项目分类'
  },
  en: {
    profile: 'GitHub Profile', tools: 'Web Tools', notes: 'Study Notes', projects: 'Projects', all: 'All',
    repoCount: 'Public repositories', pageCount: 'Live websites', synced: 'Directory updated', quick: 'Start here',
    quickDesc: 'Launch a tool, or start with a page of notes.', searchLabel: 'Search the directory',
    searchPlaceholder: 'Search names, uses, technologies…', onlineOnly: 'Online entries only', reset: 'Clear filters',
    toolsDesc: 'Tools for exploring, creating and learning in your browser.',
    notesDesc: 'Course notes, research libraries and reproducible learning exercises.',
    projectsDesc: 'Open-source software, developer tools, robotics and course projects. Explore and run the source.',
    noMatch: 'No matches. Try a different search.', loading: 'Loading the directory…',
    footer: 'Public project directory · GitHub Pages', skip: 'Skip to directory',
    open: 'Launch tool', read: 'Read online', visit: 'Visit website', course: 'Read course',
    source: 'Source', repo: 'View repository', fork: 'Fork', archived: 'Archived', local: 'Source project',
    updated: 'Code updated', results: (n, total) => `Showing ${n} of ${total} public repositories`,
    error: 'Could not load the directory. Check your connection and try again.', retry: 'Retry', current: 'This site',
    title: 'Project Directory', noDescription: 'Visit the repository for details.', categoryLabel: 'Project categories'
  }
};
let lang = 'zh';
try { const saved = localStorage.getItem('lang'); if (saved === 'en') lang = saved; } catch (_) {}
let data = null;
let loadState = 'loading';
let category = 'all';
const $ = id => document.getElementById(id);
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const localized = value => typeof value === 'string' ? value : value?.[lang] || value?.zh || value?.en || '';
// Only explicit, reviewed web/read URLs are exposed as online entries.
const safeUrl = value => { try { const u = new URL(value); return u.protocol === 'https:' ? u.href : ''; } catch (_) { return ''; } };
const onlineUrl = repo => safeUrl(repo.web_url || repo.read_url);
const title = repo => localized(repo.title) || repo.name;
const description = repo => repo[`description_${lang}`] || repo.description || texts[lang].noDescription;
const date = value => {
  if (!value || Number.isNaN(Date.parse(value))) return '';
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-GB', {year:'numeric', month:'short', day:'numeric', timeZone:'Asia/Shanghai'}).format(new Date(value));
};
function actionLabel(repo) {
  const t = texts[lang];
  if (repo.name === `${USER}.github.io`) return t.current;
  if (repo.read_url && !repo.web_url) return t.course;
  return repo.category === 'tools' ? t.open : repo.category === 'notes' ? t.read : t.visit;
}
function link(url, label, className = '', extra = '') {
  return `<a href="${escapeHtml(safeUrl(url))}" class="${className}" target="_blank" rel="noopener noreferrer" ${extra}>${label}</a>`;
}
function card(repo) {
  const t = texts[lang];
  const online = onlineUrl(repo);
  const repoLink = safeUrl(repo.repo_url);
  const badges = [repo.fork ? t.fork : '', repo.archived ? t.archived : '', !online ? t.local : ''].filter(Boolean);
  return `<article class="card directory-card">
    <div class="card-top"><h3>${link(online || repoLink, escapeHtml(title(repo)))}</h3><span class="entry-arrow" aria-hidden="true">${online ? '↗' : ''}</span></div>
    <p class="repo-slug">${escapeHtml(repo.name)}</p>
    <p class="desc">${escapeHtml(description(repo))}</p>
    <div class="meta">${repo.language ? `<span>${escapeHtml(repo.language)}</span>` : ''}${badges.map(b => `<span class="badge">${escapeHtml(b)}</span>`).join('')}</div>
    <div class="card-actions">${online ? link(online, `${escapeHtml(actionLabel(repo))} <span aria-hidden="true">↗</span>`, 'entry-link', `aria-label="${escapeHtml(actionLabel(repo) + ' · ' + title(repo))}"`) : ''}${link(repoLink, escapeHtml(online ? t.source : t.repo), 'source-link', `aria-label="${escapeHtml(t.source + ' · ' + title(repo))}"`)}</div>
    <div class="entry-date">${escapeHtml(t.updated)} <time datetime="${escapeHtml(repo.pushed_at)}">${escapeHtml(date(repo.pushed_at))}</time></div>
  </article>`;
}
function filteredRepos() {
  if (!data) return [];
  const terms = $('search').value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return data.repositories.filter(repo => {
    if (category !== 'all' && category !== repo.category) return false;
    if ($('onlineOnly').checked && !onlineUrl(repo)) return false;
    const haystack = [repo.name, ...Object.values(repo.title || {}), repo.description, repo.description_zh, repo.description_en, repo.language, ...(repo.topics || [])].join(' ').toLocaleLowerCase();
    return terms.every(term => haystack.includes(term));
  }).sort((a,b) => new Date(b.pushed_at) - new Date(a.pushed_at) || a.name.localeCompare(b.name));
}
function renderDirectory() {
  if (!data) return;
  const list = filteredRepos();
  for (const key of categories) {
    const group = list.filter(repo => repo.category === key);
    $(key).hidden = !group.length;
    $(key + 'Count').textContent = group.length;
    $(key + 'Grid').innerHTML = group.map(card).join('');
  }
  $('resultCount').textContent = texts[lang].results(list.length, data.repositories.length);
  $('emptyState').hidden = !!list.length;
  $('resetFilters').hidden = category === 'all' && !$('search').value && !$('onlineOnly').checked;
  document.querySelectorAll('[data-category]').forEach(button => button.setAttribute('aria-pressed', String(category === button.dataset.category)));
}
function applyLanguage() {
  const t = texts[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = `${USER} · ${t.title}`;
  document.querySelectorAll('[data-i18n]').forEach(el => { if (typeof t[el.dataset.i18n] === 'string') el.textContent = t[el.dataset.i18n]; });
  $('langToggle').textContent = lang === 'zh' ? 'EN' : '中文';
  $('langToggle').setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
  $('search').placeholder = t.searchPlaceholder;
  $('categoryFilters').setAttribute('aria-label', t.categoryLabel);
  if (!data) return;
  $('bio').textContent = localized(data.site.description);
  document.querySelector('meta[name="description"]').content = localized(data.site.description);
  $('repoCount').textContent = data.repositories.length;
  $('pageCount').textContent = data.repositories.filter(r => r.web_url && r.name !== `${USER}.github.io`).length;
  $('syncDate').textContent = date(data.site.synced_at);
  $('profileLinks').innerHTML = data.profiles.map(p => link(p.url, `<span class="mark">${escapeHtml(p.mark)}</span><span><strong>${escapeHtml(p.title)}</strong><span class="subtitle">${escapeHtml(localized(p.subtitle))}</span></span><span class="profile-arrow" aria-hidden="true">↗</span>`, 'profile-link')).join('');
  $('quickLinks').innerHTML = data.repositories.filter(r => r.featured && onlineUrl(r)).map(r => link(onlineUrl(r), `<span class="quick-type">${escapeHtml(t[r.category])}</span><strong>${escapeHtml(title(r))}</strong><span class="quick-action">${escapeHtml(actionLabel(r))} ↗</span>`, 'quick-link')).join('');
  renderDirectory();
}
function resetFilters() {
  category = 'all'; $('search').value = ''; $('onlineOnly').checked = false; renderDirectory(); $('search').focus();
}
function showLoadError() {
  $('loadStatus').hidden = false;
  $('loadStatus').innerHTML = `<p>${escapeHtml(texts[lang].error)}</p><button class="button" id="retryLoad" type="button">${escapeHtml(texts[lang].retry)}</button>`;
  $('retryLoad').addEventListener('click', load);
}
async function load() {
  loadState = 'loading';
  $('loadStatus').hidden = false;
  $('loadStatus').textContent = texts[lang].loading;
  try {
    const response = await fetch('./projects.json', {cache:'no-cache'});
    if (!response.ok) throw new Error(`Directory HTTP ${response.status}`);
    const next = await response.json();
    if (!next.site || !Array.isArray(next.profiles) || !Array.isArray(next.repositories) || next.repositories.some(r => !categories.includes(r.category))) throw new Error('Invalid directory');
    data = next;
    loadState = 'ready';
    $('loadStatus').hidden = true;
    applyLanguage();
  } catch (error) { loadState = 'error'; console.error(error); showLoadError(); }
}
$('year').textContent = new Date().getFullYear();
$('langToggle').addEventListener('click', () => {
  lang = lang === 'zh' ? 'en' : 'zh';
  try { localStorage.setItem('lang', lang); } catch (_) {}
  applyLanguage();
  if (loadState === 'error') showLoadError();
  else if (loadState === 'loading') $('loadStatus').textContent = texts[lang].loading;
});
$('search').addEventListener('input', renderDirectory);
$('onlineOnly').addEventListener('change', renderDirectory);
$('categoryFilters').addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (button) { category = button.dataset.category; renderDirectory(); } });
$('resetFilters').addEventListener('click', resetFilters);
$('emptyReset').addEventListener('click', resetFilters);
// Existing section URLs continue to resolve; category links reveal the requested group.
const aliases = {pages:'tools', repositories:'projects'};
function followHash() {
  const hash = location.hash.slice(1);
  const key = aliases[hash] || hash;
  if (!categories.includes(key)) return;
  if (data && ($(key).hidden || aliases[hash])) { resetFilters(); }
  requestAnimationFrame(() => $(key).scrollIntoView());
}
window.addEventListener('hashchange', followHash);
document.querySelector('.hero-actions').addEventListener('click', event => {
  const anchor = event.target.closest('a[href^="#"]');
  if (anchor && categories.includes(anchor.hash.slice(1))) {
    category = 'all'; $('search').value = ''; $('onlineOnly').checked = false; renderDirectory();
    requestAnimationFrame(() => $(anchor.hash.slice(1)).scrollIntoView());
  }
});
applyLanguage();
load().then(followHash);
