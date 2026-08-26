import assert from 'node:assert/strict'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import {
  applyCmsDeployUrls,
  collectionsFromSidebar,
  findProjectRoot,
  humanizeDirectory,
  loadCmsConfig,
} from './cms-config.mjs'
import { parseSidebarYaml } from './sidebar.mjs'

assert.equal(humanizeDirectory('strategy-hub'), 'Strategy Hub')

const SAMPLE = `sections:
  - label: Core Products
    directory: products
  - label: Test
    directory: test
`

const sampleCollections = collectionsFromSidebar(
  path.join(fileURLToPath(new URL('.', import.meta.url)), '..'),
  parseSidebarYaml(SAMPLE),
)

assert.deepEqual(
  sampleCollections.map(collection => ({ name: collection.name, label: collection.label, folder: collection.folder })),
  [
    { name: 'products', label: 'Core Products', folder: 'src/content/docs/products' },
    { name: 'products-strategy-hub', label: 'Strategy Hub', folder: 'src/content/docs/products/strategy-hub' },
    { name: 'test', label: 'Test', folder: 'src/content/docs/test' },
  ],
)

const rootDir = path.join(fileURLToPath(new URL('.', import.meta.url)), '..')
assert.equal(findProjectRoot(path.join(rootDir, 'src/pages')), rootDir)
const config = loadCmsConfig(path.join(rootDir, 'dist/.prerender/chunks'))
assert.equal(config.load_config_file, false)
assert.equal(config.collections[0].name, 'site')
assert.equal(config.collections.filter(collection => collection.name === 'site').length, 1)

const docsCollections = config.collections.slice(1)
const byName = Object.fromEntries(docsCollections.map(collection => [collection.name, collection]))
assert.equal(byName.introduction.label, 'Introduction')
assert.equal(byName.introduction.folder, 'src/content/docs/introduction')
assert.equal(byName['what-is-aidog'].folder, 'src/content/docs/introduction/what-is-aidog')
assert.equal(byName['products-strategy-hub'].folder, 'src/content/docs/products/strategy-hub')
assert.ok(byName.introduction.fields.some(field => field.name === 'title'))
assert.equal(docsCollections.every(collection => !collection.nested && !collection.meta), true)
assert.equal(config.show_preview_links, false)

const previewUrls = applyCmsDeployUrls({
  backend: { base_url: 'https://aidog.xyz', site_domain: 'docs.aidog.xyz' },
  site_url: 'https://docs.aidog.xyz',
  logo_url: '/favicon.png',
  public_folder: '/docs-media',
})
process.env.SITE = 'https://docs-preview.aidog.xyz'
process.env.BASE = '/'
process.env.CMS_SITE_URL = 'https://docs-preview.aidog.xyz'
process.env.CMS_OAUTH_BASE_URL = 'https://web-dev.aidog.xyz'
const previewConfig = applyCmsDeployUrls(previewUrls)
assert.equal(previewConfig.site_url, 'https://docs-preview.aidog.xyz')
assert.equal(previewConfig.display_url, 'https://docs-preview.aidog.xyz')
assert.equal(previewConfig.logo_url, '/favicon.png')
assert.equal(previewConfig.public_folder, '/docs-media')
assert.equal(previewConfig.backend.base_url, 'https://web-dev.aidog.xyz')
assert.equal(previewConfig.backend.site_domain, 'docs-preview.aidog.xyz')
delete process.env.SITE
delete process.env.BASE
delete process.env.CMS_SITE_URL
delete process.env.CMS_OAUTH_BASE_URL
