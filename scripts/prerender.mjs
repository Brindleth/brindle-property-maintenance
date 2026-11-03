import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

// Build-time rendering only. The published site remains entirely static.
// Photos and copy are readable even before JavaScript starts or if it fails.
const root = resolve(import.meta.dirname, '..')
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const markup = renderToString(createElement(App))
  const path = resolve(root, 'dist/index.html')
  const html = await readFile(path, 'utf8')
  if (!html.includes('<div id="root"></div>')) throw new Error('Missing application mount point')
  await writeFile(path, html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`))
  console.log('Prerendered real photographs and page content into static HTML.')
} finally {
  await server.close()
}
