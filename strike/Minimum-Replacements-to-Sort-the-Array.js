/*
You are given a 0-indexed integer array nums. In one operation you can replace any element of the array with any two elements that sum to it.

For example, consider nums = [5,6,7]. In one operation, we can replace nums[1] with 2 and 4 and convert nums to [5,2,4,7].
Return the minimum number of operations to make an array that is sorted in non-decreasing order.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    let steps = 0, prev = nums[nums.length - 1];
   for (let i = nums.length - 2; i >= 0; i--) {
       let num = nums[i];
       let n = Math.ceil(num / prev);
       steps += n - 1;
       prev = Math.floor(num / n);
   }
   return steps;
};