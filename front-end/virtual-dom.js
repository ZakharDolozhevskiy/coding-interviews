/**
 * @param {HTMLElement}
 * @return {object} object literal presentation
 */
function virtualize(element) {
  let type = element.tagName.toLowerCase()
  let attrs = {}
  let children = []

  for (let j = 0; j < element.attributes.length; j++) {
    let name = element.attributes[j].name
    let value = element.attributes[j].value
    attrs[name === 'class' ? 'className' : name] = value
  }

  children = Array.from(element.childNodes).map(child => {
    return child.nodeType === 3 ? child.textContent : virtualize(child)
  })

  children = children.length === 1 ? children[0] : children;

  return {
    type,
    props: { ...attrs, children }
  }
}

/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement}
 */
function render(obj) {
  if (typeof obj === 'string') return document.createTextNode(obj)

  let element = document.createElement(obj.type)
  let { children = [], ...attrs } = obj.props

  Object.keys(attrs).forEach(attr => {
    element.setAttribute(attr === 'className' ? 'class' : attr, attrs[attr])
  })

  if (typeof children === 'string') {
    element.appendChild(render(children))
  } else {
    children.forEach(child => element.appendChild(render(child)))
  }

  return element
}
