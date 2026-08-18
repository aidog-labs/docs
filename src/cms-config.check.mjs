import assert from 'node:assert/strict'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  collectionsFromSidebar,
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
const config = loadCmsConfig(rootDir)
assert.equal(config.load_config_file, false)
assert.equal(config.collections[0].name, 'site')
assert.equal(config.collections.filter(collection => collection.name === 'site').length, 1)

const docsCollections = config.collections.slice(1)
const byName = Object.fromEntries(docsCollections.map(collection => [collection.name, collection]))
assert.equal(byName.introduction.label, 'Introduction')
assert.equal(byName.introduction.folder, 'src/content/docs/introduction')
assert.equal(byName['getting-started'].folder, 'src/content/docs/getting-started')
assert.equal(byName['products-strategy-hub'].folder, 'src/content/docs/products/strategy-hub')
assert.equal(byName.test.folder, 'src/content/docs/test')
assert.ok(byName.introduction.fields.some(field => field.name === 'title'))
assert.equal(docsCollections.every(collection => !collection.nested && !collection.meta), true)
