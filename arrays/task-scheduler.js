// Task Scheduler
// Given a char array representing tasks CPU need to do. It contains capital letters A to Z where
// different letters represent different tasks.Tasks could be done without original order. Each task
// could be done in one interval. For each interval, CPU could finish one task or just be idle.
//
// However, there is a non-negative cooling interval n that means between two same tasks, there must
// be at least n intervals that CPU are doing different tasks or just be idle.
// You need to return the least number of intervals the CPU will take to finish all the given tasks.

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

const leastInterval = (tasks, n) => {
  let groups = [];
  let counter = 0;
  let intervals = 0;
  let completed, id;

  tasks.forEach(task => {
    id = task.charCodeAt(0) - 65;
    groups[id] = groups[id] ? groups[id] + 1 : 1;
    counter++;
  });

  while (counter) {
    completed = -1;

    for (let i = 0; i < groups.length; i++) {
      if (groups[i] !== 0) {
        counter--; groups[i]--; intervals++; completed++;
        if (completed === n) break;
      }
    }

    groups.sort((a, b) => b - a);
    intervals += counter ? Math.max(0, n - completed) : 0;
  }

  return intervals;
};

// https://leetcode.com/problems/task-scheduler/solution/
const leastInterval = (tasks, n) => {
  let map = [], tasksCount = 0, frequent, idleCount;

  tasks.forEach(task => {
    tasksCount++;
    let code = task.charCodeAt(0) - 65;
    map[code] = map[code] ? map[code] + 1 : 1;
  });

  map.sort((a, b) => a - b);

  frequent = map.pop() - 1;
  idleCount = frequent * n;

  for (let i = map.length - 1; i >= 0; i--)
    idleCount -= Math.min(map[i], frequent);

  return idleCount > 0 ? tasksCount + idleCount : tasksCount;
};