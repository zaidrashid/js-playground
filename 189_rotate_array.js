/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let afterRotate = nums.splice(-(k), k);
    nums.splice(0, 0, ...afterRotate);
};

let nums = [1,2,3,4,5,6,7];
let k = 3;
console.log(rotate(nums, k));