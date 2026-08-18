import assert from 'node:assert/strict'
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
    ['introduction'],
  ),
  /missing directory "nft"/,
)

assert.throws(
  () => assertSectionsMatchDirectories(
    [{ label: 'NFT', directory: 'nft' }],
    ['nft', 'protocol'],
  ),
  /"protocol" is not listed/,
)

assert.deepEqual(
  toStarlightSidebar([{ label: 'NFT', directory: 'nft' }]),
  [{ label: 'NFT', items: [{ autogenerate: { directory: 'nft' } }] }],
)

const rootDir = path.join(fileURLToPath(new URL('.', import.meta.url)), '..')
const sidebar = loadStarlightSidebar(rootDir)
assert.equal(sidebar.length, 7)
assert.equal(sidebar[0].label, 'Introduction')
assert.equal(sidebar[3].label, '$AIDOG Token')
assert.equal(sidebar[6].label, 'Security & Risks')
