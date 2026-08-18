import fs from 'node:fs'
import path from 'node:path'
import { parse } from 'yaml'
import { parseSidebarYaml } from './sidebar.mjs'

const DOCS_ROOT = 'src/content/docs'

const DOCS_FIELDS = [
  { label: 'Template', name: 'template', widget: 'hidden', default: 'doc' },
  { label: 'Title', name: 'title', widget: 'string' },
  { label: 'Description', name: 'description', widget: 'text' },
  {
    label: 'Sidebar',
    name: 'sidebar',
    widget: 'object',
    collapsed: true,
    fields: [
      { label: 'Order', name: 'order', widget: 'number', value_type: 'int', required: false },
      { label: 'Label', name: 'label', widget: 'string', required: false },
    ],
  },
  { label: 'Draft', name: 'draft', widget: 'boolean', default: true },
  { label: 'Body', name: 'body', widget: 'markdown' },
]

/**
 * @param {string} slug
 * @returns {string} title-cased words from a directory slug
 */
export function humanizeDirectory(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * @param {string} name
 * @param {Set<string>} used
 * @returns {string} unique Decap collection name
 */
function uniqueName(name, used) {
  let candidate = name
  let suffix = 2
  while (used.has(candidate)) {
    candidate = `${name}-${suffix++}`
  }
  used.add(candidate)
  return candidate
}

/**
 * @param {{ name: string, label: string, folder: string }} spec
 * @returns {Record<string, unknown>} Decap folder collection
 */
export function toDocsCollection({ name, label, folder }) {
  return {
    name,
    label,
    folder,
    label_singular: 'Doc',
    create: true,
    delete: true,
    extension: 'md',
    format: 'frontmatter',
    slug: '{{slug}}',
    editor: { preview: true },
    filter: { field: 'template', value: 'doc' },
    fields: DOCS_FIELDS,
  }
}

/**
 * @param {string} absDir
 * @returns {boolean} whether the directory tree contains a markdown file
 */
function hasMarkdown(absDir) {
  if (!fs.existsSync(absDir)) {
    return false
  }

  for (const child of fs.readdirSync(absDir, { withFileTypes: true })) {
    if (child.isFile() && child.name.endsWith('.md')) {
      return true
    }
    if (child.isDirectory() && !child.name.startsWith('.') && hasMarkdown(path.join(absDir, child.name))) {
      return true
    }
  }

  return false
}

/**
 * @param {string} absDir
 * @param {string} relativeDir
 * @param {Set<string>} used
 * @param {Record<string, unknown>[]} collections
 * @returns {void} appends nested folder collections
 */
function addSubcollections(absDir, relativeDir, used, collections) {
  if (!fs.existsSync(absDir)) {
    return
  }

  for (const child of fs.readdirSync(absDir, { withFileTypes: true })) {
    if (!child.isDirectory() || child.name.startsWith('.')) {
      continue
    }
    const childAbs = path.join(absDir, child.name)
    if (!hasMarkdown(childAbs)) {
      continue
    }
    const relative = `${relativeDir}/${child.name}`
    collections.push(toDocsCollection({
      name: uniqueName(relative.replaceAll('/', '-'), used),
      label: humanizeDirectory(child.name),
      folder: `${DOCS_ROOT}/${relative}`,
    }))
    addSubcollections(childAbs, relative, used, collections)
  }
}

/**
 * @param {string} rootDir
 * @param {{ label: string, directory: string }[]} sections
 * @returns {Record<string, unknown>[]} Decap collections for sidebar sections
 */
export function collectionsFromSidebar(rootDir, sections) {
  const docsDir = path.join(rootDir, DOCS_ROOT)
  const used = new Set()
  /** @type {Record<string, unknown>[]} */
  const collections = []

  for (const section of sections) {
    collections.push(toDocsCollection({
      name: uniqueName(section.directory, used),
      label: section.label,
      folder: `${DOCS_ROOT}/${section.directory}`,
    }))
    addSubcollections(path.join(docsDir, section.directory), section.directory, used, collections)
  }

  return collections
}

/**
 * @param {string} rootDir
 * @returns {Record<string, unknown>} full Decap config with generated docs collections
 */
export function loadCmsConfig(rootDir) {
  const yamlPath = path.join(rootDir, 'public/admin/config.yml')
  const sidebarPath = path.join(rootDir, 'src/data/sidebar.yaml')
  const raw = parse(fs.readFileSync(yamlPath, 'utf8'))
  if (!raw || typeof raw !== 'object' || Array.isArray(raw) || !Array.isArray(raw.collections)) {
    throw new Error('config.yml must be a mapping with a collections list')
  }

  const sections = parseSidebarYaml(fs.readFileSync(sidebarPath, 'utf8'))
  return {
    ...raw,
    load_config_file: false,
    collections: [...raw.collections, ...collectionsFromSidebar(rootDir, sections)],
  }
}
