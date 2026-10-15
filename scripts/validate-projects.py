#!/usr/bin/env python3
"""Validate the published catalog and its local asset references without dependencies."""
import json
from collections import Counter
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'projects.json').read_text())
repos = data['repositories']
assert repos, 'Catalog is empty'
assert len({r['name'] for r in repos}) == len(repos), 'Duplicate repository'
assert datetime.fromisoformat(data['site']['synced_at']), 'Missing sync timestamp'
owner = data['site']['owner']
for repo in repos:
    assert repo['category'] in ('tools', 'notes', 'projects'), repo['name']
    assert repo['repo_url'] == f"https://github.com/{owner}/{repo['name']}", repo['name']
    assert repo.get('title', {}).get('zh') and repo['title'].get('en'), repo['name']
    assert repo.get('pushed_at') and datetime.fromisoformat(repo['pushed_at'].replace('Z', '+00:00')), repo['name']
    for key in ('web_url', 'read_url', 'repo_url'):
        if not repo.get(key):
            continue
        url = urlparse(repo[key])
        assert url.scheme == 'https' and url.hostname and not url.username and not url.password, (repo['name'], key)
    assert not repo.get('featured') or repo.get('web_url') or repo.get('read_url'), repo['name']
    if repo['category'] == 'tools':
        assert repo.get('web_url'), f"Tool missing live URL: {repo['name']}"
for profile in data['profiles']:
    assert urlparse(profile['url']).scheme == 'https'
html = (ROOT / 'index.html').read_text()
for asset in ('./app.js', './directory.css'):
    assert asset in html and (ROOT / asset).is_file(), asset
print(f'Validated {len(repos)} repositories: {dict(Counter(r["category"] for r in repos))}')
