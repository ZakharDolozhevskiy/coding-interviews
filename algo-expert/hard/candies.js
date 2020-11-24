// https://leetcode.com/problems/candy/

// There are N children standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

// brut force O(n * n) / O(n)
const candy = function(ratings) {
    let candies = new Array(ratings.length).fill(1)
    let flag = true

    while(flag) {
        flag = false

        for (var i = 0; i < ratings.length; i++) {
            if (i > 0 && ratings[i - 1] < ratings[i] && candies[i - 1] >= candies[i]) {
                candies[i] = candies[i - 1] + 1
                flag = true
            }

            if (i !== ratings.length - 1 && ratings[i + 1] < ratings[i] && candies[i + 1] >= candies[i]) {
                candies[i] = candies[i + 1] + 1
                flag = true
            }
        }
    }

    return candies.reduce((acc, n) => acc + n, 0)
}

// one path O(n) / O(n)
const candy = function(ratings) {
    const candies = new Array(ratings.length).fill(1)

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }

    let sum = candies[candies.length - 1]

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1)
        }
        sum += candies[i]
    }

    return sum
}