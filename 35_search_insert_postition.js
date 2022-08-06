/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} index of found target, or the suitable index position if it were to be inserted
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  let found;
  do {
    let mid = start + Math.floor( (end-start) / 2);
    let val = nums[mid];
    if (val === target) {
      found = mid;
      break;
    }

    // move towards the end (left)
    if (val < target) {
      start = mid + 1;
      found = start;
    } else {
      // move towards the start (right)
      end = mid -1;
      found = val > target ? mid : mid + 1;
    }
  } while (start <= end);
  return found;
};

/** NUMS are alwasy sorted */
// const NUMS = [1, 3, 5, 6];
// const TARGET = 5;
const NUMS = [1, 3, 4, 6];
const TARGET = 7;
console.log(searchInsert(NUMS, TARGET));
