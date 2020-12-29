// Network Delay Time
// https://leetcode.com/problems/network-delay-time/

// Dijkstra's Algorithm
// https://www.youtube.com/watch?v=XB4MIexjvY0

const networkDelayTime = function(times, N, K) {
    let graph = [];

    times.forEach(([key, nextNode, weight]) => {
        graph[key] = graph[key] || [];
        graph[key].push([nextNode, weight]);
    });

    // node => cost to reach ( weight sum )
    let nodes = {};

    for (let i = 1; i <= N; i++) { nodes[i] = Infinity; }

    // Starting point
    nodes[K] = 0;

    let visited = {};

    while (true) {
        let next = null, weight = Infinity;

        for (let j = 1; j <= N; j++) {
            if (!visited[j] && nodes[j] < weight) {
                next = j
                weight = nodes[j]
            }
        }

        // Visited all nodes
        if (!next) break

        visited[next] = true

        graph[next] && graph[next].forEach(([key, weight]) => {
            nodes[key] = Math.min(nodes[key], nodes[next] + weight)
        })
    }

    let ans = 0

    for (let key in nodes) {
        if (nodes[key] === Infinity) return -1
        ans = Math.max(ans, nodes[key])
    }

    return ans
}