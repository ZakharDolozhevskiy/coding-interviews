// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.
// OJ's undirected graph serialization:
// Nodes are labeled uniquely.
//
// We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
// As an example, consider the serialized graph {0,1,2#1,2#2,2}.
//
// The graph has a total of three nodes, and therefore contains three parts as separated by #.
//
// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
// Second node is labeled as 1. Connect node 1 to node 2.
// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

const cloneGraph = function(node, created = {}) {
  if (!node) return null;

  if (created[node.label])
    return created[node.label];

  created[node.label] = new UndirectedGraphNode(node.label);
  created[node.label].neighbors = node.neighbors.map(n => cloneGraph(n, created));

  return created[node.label];
};