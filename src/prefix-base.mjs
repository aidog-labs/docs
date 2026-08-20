/**
 * @param {string} pathname
 * @param {string} [base]
 * @returns {string} pathname prefixed with Astro `base` when needed
 */
export function withSiteBase(pathname, base = '/') {
  if (!pathname.startsWith('/') || pathname.startsWith('//')) {
    return pathname
  }

  const normalized = !base || base === '/'
    ? ''
    : `/${base.replace(/^\/+|\/+$/g, '')}`

  if (!normalized || pathname === normalized || pathname.startsWith(`${normalized}/`)) {
    return pathname
  }

  return `${normalized}${pathname}`
}

/**
 * @typedef {{ type?: string, children?: unknown[], properties?: Record<string, unknown> }} HastNode
 */

/**
 * @param {string} [base]
 * @returns {(tree: HastNode) => void} rehype transformer
 */
export function rehypePrefixSiteBase(base = '/') {
  return (tree) => {
    walk(tree, (node) => {
      if (node.type !== 'element' || !node.properties) {
        return
      }
      const props = node.properties
      if (typeof props.href === 'string') {
        props.href = withSiteBase(props.href, base)
      }
      if (typeof props.src === 'string') {
        props.src = withSiteBase(props.src, base)
      }
    })
  }
}

/**
 * @param {HastNode} node
 * @param {(node: HastNode) => void} visit
 * @returns {void}
 */
function walk(node, visit) {
  visit(node)
  if (!Array.isArray(node.children)) {
    return
  }
  for (const child of node.children) {
    if (child && typeof child === 'object') {
      walk(/** @type {HastNode} */ (child), visit)
    }
  }
}
