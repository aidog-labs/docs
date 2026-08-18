import fs from 'node:fs'
import path from 'node:path'
import { parse } from 'yaml'

const DIRECTORY_PATTERN = /^\w[\w-]*$/

/**
 * @typedef {{ label: string, directory: string }} SidebarSection
 */

/**
 * @param {string} text
 * @returns {SidebarSection[]} parsed top-level sidebar sections
 */
export function parseSidebarYaml(text) {
  const data = parse(text)
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('sidebar.yaml must be a mapping with a sections list')
  }
  if (!Array.isArray(data.sections) || data.sections.length === 0) {
    throw new Error('sidebar.yaml must contain a non-empty sections list')
  }

  /** @type {SidebarSection[]} */
  const sections = []
  for (const [index, raw] of data.sections.entries()) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
      throw new Error(`sidebar.yaml sections[${index}] must be an object`)
    }
    const label = typeof raw.label === 'string' ? raw.label.trim() : ''
    const directory = typeof raw.directory === 'string' ? raw.directory.trim() : ''
    if (!label) {
      throw new Error(`sidebar.yaml sections[${index}] is missing label`)
    }
    if (!directory) {
      throw new Error(`sidebar.yaml sections[${index}] is missing directory`)
    }
    if (directory.includes('/') || directory.includes('\\') || directory.includes('..')) {
      throw new Error(`sidebar.yaml sections[${index}] directory must be a top-level folder, got "${directory}"`)
    }
    if (!DIRECTORY_PATTERN.test(directory)) {
      throw new Error(`sidebar.yaml sections[${index}] directory "${directory}" is not a valid folder name`)
    }
    sections.push({ label, directory })
  }

  const seen = new Set()
  for (const section of sections) {
    if (seen.has(section.directory)) {
      throw new Error(`sidebar.yaml lists directory "${section.directory}" more than once`)
    }
    seen.add(section.directory)
  }

  return sections
}

/**
 * @param {SidebarSection[]} sections
 * @param {string[]} directories
 * @returns {void} throws when yaml and the docs folder disagree
 */
export function assertSectionsMatchDirectories(sections, directories) {
  const fromYaml = new Set(sections.map(section => section.directory))
  const fromFs = new Set(directories)

  for (const section of sections) {
    if (!fromFs.has(section.directory)) {
      throw new Error(`sidebar.yaml section "${section.label}" points at missing directory "${section.directory}"`)
    }
  }

  const extras = [...fromFs].filter(directory => !fromYaml.has(directory)).sort()
  if (extras.length > 0) {
    throw new Error(`docs directory "${extras.join(', ')}" is not listed in sidebar.yaml`)
  }
}

/**
 * @param {SidebarSection[]} sections
 * @returns {{ label: string, items: { autogenerate: { directory: string } }[] }[]} Starlight sidebar config
 */
export function toStarlightSidebar(sections) {
  return sections.map(section => ({
    label: section.label,
    items: [{ autogenerate: { directory: section.directory } }],
  }))
}

/**
 * @param {string} rootDir
 * @returns {{ label: string, items: { autogenerate: { directory: string } }[] }[]} Starlight sidebar config
 */
export function loadStarlightSidebar(rootDir) {
  const yamlPath = path.join(rootDir, 'src/data/sidebar.yaml')
  const docsDir = path.join(rootDir, 'src/content/docs')
  const sections = parseSidebarYaml(fs.readFileSync(yamlPath, 'utf8'))
  const directories = fs.readdirSync(docsDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
    .map(entry => entry.name)
  assertSectionsMatchDirectories(sections, directories)
  return toStarlightSidebar(sections)
}
