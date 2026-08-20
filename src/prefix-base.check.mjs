import assert from 'node:assert/strict'
import { withSiteBase } from './prefix-base.mjs'

assert.equal(withSiteBase('/getting-started/', '/'), '/getting-started/')
assert.equal(withSiteBase('/getting-started/', '/docs-preview'), '/docs-preview/getting-started/')
assert.equal(withSiteBase('/docs-preview/getting-started/', '/docs-preview'), '/docs-preview/getting-started/')
assert.equal(withSiteBase('https://example.com/x', '/docs-preview'), 'https://example.com/x')
assert.equal(withSiteBase('../x', '/docs-preview'), '../x')
