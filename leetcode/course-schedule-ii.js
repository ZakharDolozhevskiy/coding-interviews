// https://leetcode.com/problems/course-schedule-ii/submissions/
// Course Schedule II

var dfs = function(graph, node, visited, processed, result) {
    if (processed[node]) return true

    if (visited[node]) return false

    visited[node] = true

    if (graph[node]) {
        for (let next of graph[node]) {
            if (!dfs(graph, next, visited, processed, result)) {
                return false
            }
        }
    }

    processed[node] = true

    result.push(node)

    return true
};

var findOrder = function(numCourses, prerequisites) {
    let graph = {};
    let visited = {};
    let processed = {};
    let result = []

    for (let i = 0; i < numCourses; i++) {
        graph[i] = []
    }

    for (let i = 0; i < prerequisites.length; i++) {
        graph[prerequisites[i][0]].push(prerequisites[i][1])
    }

    for (let node in graph) {
        if (!processed[node]) {
            dfs(graph, node, visited, processed, result)
        }
    }

    return numCourses === result.length ? result : []
};
