/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * Notice that the solution set must not contain duplicate triplets.
 *
 * https://leetcode.com/problems/3sum/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Сортируем по возрастанию. Нужно использовать предикат nums.sort() -> ошибка
    nums.sort((a, b) => a - b)

    const result = []

    for (let i = 0; i < nums.length; i++) {
        // Пропустить дубликат с начала списка
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            // Пропустить дубликат с конца списка
            if (k < nums.length - 1 && nums[k] === nums[k + 1]) {
               k--
               continue
            }
            // Уменьшаем наибольший элемент
            if (nums[i] + nums[j] + nums[k] > 0) {
               k--
            }
            // Увеличиваем наименьший элемент
            else if (nums[i] + nums[j] + nums[k] < 0) {
               j++
            }
            else {
                result.push([nums[i], nums[j], nums[k]])
                j++
                k--
            }
        }
    }

    return result
};
