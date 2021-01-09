// https://leetcode.com/problems/course-schedule/
// // Course Schedule I

var dfs = function(graph, node, visited, processed) {
    // Processed or doen't have dependensies
    if (processed[node] || !graph[node]) return true
    // Detect a cicle
    if (visited[node]) return false

    visited[node] = true

    for (let next of graph[node]) {
        if (!dfs(graph, next, visited, processed)) return false
    }

    processed[node] = true

    return true
};

var canFinish = function(numCourses, prerequisites) {
    let graph = {};
    let visited = {};
    let processed = {};

    for (let i = 0; i < prerequisites.length; i++) {
        graph[prerequisites[i][0]] = graph[prerequisites[i][0]] || []
        graph[prerequisites[i][0]].push(prerequisites[i][1])
    }

    for (let node in graph) {
        if (processed[node]) continue
        if (!dfs(graph, node, visited, processed)) return false
    }

    return true
};

// BFS

var canFinish = function(numCourses, prerequisites) {
    let indegree = new Array(numCourses).fill(0)

    prerequisites.forEach(([course, prerequisite]) => {
        indegree[course] += 1
    })

    let queue = []

    indegree.forEach((prerequisite, course) => {
        prerequisite === 0 && queue.push(course)
    })

    let scheduled = 0

    while (queue.length) {
        let cand = queue.pop()
        scheduled++

        prerequisites.forEach(([course, prerequisite]) => {
            if (cand === prerequisite) {
                indegree[course] -= 1
                indegree[course] === 0 && queue.push(course)
            }
        })
    }

    return scheduled === numCourses
};