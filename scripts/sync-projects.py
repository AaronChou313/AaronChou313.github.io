#!/usr/bin/env python3
"""Refresh public GitHub metadata, preserving reviewed categories, copy and entry URLs."""
import json
import subprocess
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FIELDS = ('name', 'description', 'language', 'topics', 'stargazers_count', 'fork',
          'archived', 'pushed_at', 'updated_at', 'has_pages', 'homepage', 'default_branch')

def main():
    target = ROOT / 'projects.json'
    data = json.loads(target.read_text())
    owner = data['site']['owner']
    # Public endpoint intentionally excludes private repositories, even when gh is authenticated.
    result = subprocess.run(['gh', 'api', '--paginate', '--slurp',
                             f'users/{owner}/repos?per_page=100&type=owner&sort=updated'],
                            check=True, capture_output=True, text=True)
    batches = json.loads(result.stdout)
    raw = [repo for batch in batches for repo in batch if not repo.get('private', True)]
    if not raw:
        raise RuntimeError('Empty public repository response; snapshot was not changed')
    previous = {repo['name']: repo for repo in data['repositories']}
    repositories = []
    added = []
    for repo in raw:
        # Repository ID protects editorial metadata across renames in subsequent syncs.
        prior = previous.get(repo['name']) or next((r for r in previous.values() if r.get('id') == repo['id']), {})
        item = {**prior, **{key: repo.get(key) for key in FIELDS}, 'id': repo['id'], 'repo_url': repo['html_url']}
        if not prior:
            added.append(repo['name'])
            item.update(category='projects', title={'zh':repo['name'], 'en':repo['name']},
                        description_zh='', description_en='', web_url='', featured=False)
        # Never infer a live site from homepage: forks may point to the upstream website.
        repositories.append(item)
    data['repositories'] = repositories
    data['site']['synced_at'] = datetime.now(timezone.utc).isoformat(timespec='seconds')
    temporary = target.with_suffix('.json.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    temporary.replace(target)
    removed = sorted(set(previous) - {repo['name'] for repo in raw})
    print(f'Synced {len(repositories)} public repositories.')
    if added:
        print('Review category, bilingual copy and online URL for new repositories: ' + ', '.join(added))
    if removed:
        print('No longer public under this account: ' + ', '.join(removed))

if __name__ == '__main__':
    main()
