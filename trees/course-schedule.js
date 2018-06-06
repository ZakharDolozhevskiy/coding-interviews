// Course Schedule
// There are a total of n courses you have to take, labeled from 0 to n-1.
//
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1,
// which is expressed as a pair: [0,1]
//
// Given the total number of courses and a list of prerequisite pairs,
// is it possible for you to finish all courses?
//
// Input: 2, [[1,0]] Output: true
// Input: 2, [[1,0],[0,1]] Output: false
// Input: 3, [[1,0],[1,2],[0,1]]) Output: false

const dfs = (graph, node, visited, processed) => {
  if (processed[node] || !graph[node])
    return true;

  if (visited[node])
    return false;

  visited[node] = true;

  for (let next of graph[node])
    if (!dfs(graph, next, visited, processed))
      return false;

  processed[node] = true;

  return true;
};

const canFinish = (numCourses, prerequisites) => {
  let graph = {};
  let visited = {};
  let processed = {};

  for (let p = 0; p < prerequisites.length; p++) {
    graph[prerequisites[p][0]] = graph[prerequisites[p][0]] || [];
    graph[prerequisites[p][0]].push(prerequisites[p][1]);
  }

  for (let node in graph) {
    if (processed[node]) continue;
    if (!dfs(graph, node, visited, processed)) return false;
  }

  return true;
};
