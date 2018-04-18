// Best Time to Buy and Sell Stock II
//
// Say you have an array for which the ith element is the price of a given stock on day i.
// Design an algorithm to find the maximum profit. You may complete as many transactions as you
// like (ie, buy one and sell one share of the stock multiple times). However, you may not engage
// in multiple transactions at the same time (ie, you must sell the stock before you buy again).

const maxProfit = input => {
  if (input.length <= 1) return 0;

  let profit = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] < input[i + 1]) profit += input[i + 1] - input[i];
  }

  return profit;
};

console.log(maxProfit([6,1,3,2,4,7])); // 7