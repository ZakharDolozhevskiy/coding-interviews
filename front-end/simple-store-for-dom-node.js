// Create a simple store for DOM element
// https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node

class NodeStore {
  store = {}

  set(node, value) {
    if (node.store_key) {
      return this.store[node.store_key] = value
    } else {
      return this.store[node.store_key = Symbol()] = value
    }
  }

  get(node) {
    if (node.store_key) {
      return this.store[node.store_key]
    }
  }

  has(node) {
    return !!this.get(node)
  }
}