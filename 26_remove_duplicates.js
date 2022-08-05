// longer
const _removeDuplciates = (nums) => {
  let i = 0;
  do {
    let val = nums[i];
    
    let currIndex;
    let lastIndex;
    do {
      currIndex = nums.indexOf(val);
      lastIndex = nums.lastIndexOf(val);
      if (currIndex == lastIndex) {
        break;
      }
      nums.splice(lastIndex, 1);
    } while (currIndex !== lastIndex);
    i++;
  } while(i < nums.length)
    
  return nums.length;
}

// a bit faster but modifying the array can be slower
// than accesing the value of given index
const removeDuplciates = (nums) => {
  if (nums. length === 0 || nums.length === 1) return nums.length;

  let i = 0;
  do {
    const val = nums[i];
    const lI = nums.lastIndexOf(val);
    if (i !== lI) {
      nums.splice(i+1, lI-i);
    }
    i++;
  } while(i < nums.length);

  return nums.length;
}

let nums = [0,0,1,1,1,2,2,3,3,4];
// [1,2,2,2,3]
const res = removeDuplciates(nums);
console.log(res, nums);