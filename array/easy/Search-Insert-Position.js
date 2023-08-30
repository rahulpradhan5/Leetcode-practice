/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var index = nums.findIndex(nums=>nums == target);
    if (index === -1) {
        var index = nums.findIndex(nums=>nums > target);
        if(index === -1){
            var index = nums.length;
        }
    }else{
        return index;
    }
    return index;
};