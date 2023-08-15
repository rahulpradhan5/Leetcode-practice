/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var nums = [2, 7, 11, 15];
var target = 9;

function twoSum(nums, target) {
    var hasSet = new Map();
    for (var i = 0; i <= nums.length - 1; i++) {
        const firstNum = nums[i];
        const secondNum = target - nums[i];
        if (hasSet.has(secondNum)) {
            return [i, hasSet.get(secondNum)];
        }
        hasSet.set(firstNum, i);
    }
}

twoSum(nums, target);


// complaxity

// time = O(n)
// space = O(n)
