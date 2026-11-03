/** Deployment administration only. Never bundled; credentials stay in this process's memory. */
import { spawnSync } from 'node:child_process'

const mode = process.argv[2] || 'status'
const repo = 'Brindleth/brindle-property-maintenance'
const credential = spawnSync('git', ['credential', 'fill'], {
  input: 'protocol=https\nhost=github.com\n\n', encoding: 'utf8',
  env: { ...process.env, GCM_INTERACTIVE: 'never', GIT_TERMINAL_PROMPT: '0' },
})
const token = credential.stdout?.split(/\r?\n/).find(x => x.startsWith('password='))?.slice(9)
if (!token) throw new Error('No noninteractive GitHub credential is available. Use the README manual publishing steps.')
async function api(path, method = 'GET', data) {
  const result = await fetch(`https://api.github.com${path}`, {
    method, headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : undefined,
  })
  const body = result.status === 204 ? {} : await result.json()
  return { status: result.status, body }
}
const user = await api('/user')
if (user.body.login !== 'Brindleth') throw new Error('Unexpected GitHub account; no changes made.')
if (mode === 'create') {
  const existing = await api(`/repos/${repo}`)
  if (existing.status !== 404) throw new Error(`Destination already exists or cannot be inspected (${existing.status}); no repository changes made.`)
  const created = await api('/user/repos', 'POST', { name: 'brindle-property-maintenance', description: 'Brindle Property Maintenance — static interactive 3D construction website.', private: false, auto_init: false, has_issues: false, has_wiki: false, has_projects: false })
  if (created.status !== 201) throw new Error(`Repository creation failed: ${created.status} ${created.body.message}`)
  console.log(JSON.stringify({ repository: created.body.html_url, created: true }))
} else if (mode === 'enable') {
  const current = await api(`/repos/${repo}/pages`)
  const result = current.status === 404 ? await api(`/repos/${repo}/pages`, 'POST', { build_type: 'workflow' }) : current
  if (![200, 201].includes(result.status)) throw new Error(`Pages configuration failed: ${result.status} ${result.body.message}`)
  console.log(JSON.stringify({ status: result.status, url: result.body.html_url, build_type: result.body.build_type }))
} else if (mode === 'status') {
  const result = await api(`/repos/${repo}/actions/runs?per_page=3`)
  if (result.status !== 200) throw new Error(`Could not read deployment status (${result.status})`)
  console.log(JSON.stringify(result.body.workflow_runs.map(r => ({ id: r.id, status: r.status, conclusion: r.conclusion, commit: r.head_sha, url: r.html_url })), null, 2))
} else { throw new Error('Use create, enable or status.') }
