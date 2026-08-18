import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  assertSectionsMatchDirectories,
  loadStarlightSidebar,
  parseSidebarYaml,
  toStarlightSidebar,
} from './sidebar.mjs'

const SAMPLE = `sections:
  - label: Introduction
    directory: introduction
  - label: NFT
    directory: nft
`

assert.deepEqual(parseSidebarYaml(SAMPLE), [
  { label: 'Introduction', directory: 'introduction' },
  { label: 'NFT', directory: 'nft' },
])

assert.throws(
  () => parseSidebarYaml('sections:\n  - label: NFT\n    directory: nft/extra\n'),
  /top-level folder/,
)

assert.throws(
  () => parseSidebarYaml('sections:\n  - label: A\n    directory: nft\n  - label: B\n    directory: nft\n'),
  /more than once/,
)

assert.throws(
  () => assertSectionsMatchDirectories(
    [{ label: 'NFT', directory: 'nft' }],
    ['nft', 'protocol'],
  ),
  /"protocol" is not listed/,
)

assert.doesNotThrow(() => assertSectionsMatchDirectories(
  [{ label: 'NFT', directory: 'nft' }, { label: 'Test', directory: 'test' }],
  ['nft'],
))

assert.deepEqual(
  toStarlightSidebar([{ label: 'NFT', directory: 'nft' }]),
  [{ label: 'NFT', items: [{ autogenerate: { directory: 'nft' } }] }],
)

const rootDir = path.join(fileURLToPath(new URL('.', import.meta.url)), '..')
const sidebar = loadStarlightSidebar(rootDir)
const sections = parseSidebarYaml(fs.readFileSync(path.join(rootDir, 'src/data/sidebar.yaml'), 'utf8'))
assert.equal(sidebar[0].label, 'Introduction')
assert.equal(sidebar[3].label, '$AIDOG Token')
assert.ok(sidebar.some(section => section.label === 'Security & Risks'))
assert.equal(sidebar.length, sections.length)
