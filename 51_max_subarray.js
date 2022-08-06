var _maxSubarray = function(nums) {
    for (let i=1; i<nums.length; i++) {
        const prev = nums[i];
        const next = nums[i] + nums[i-1];
        nums[i] = Math.max(prev, next);
    }
    return Math.max(...nums);
}

var maxSubarray = function(nums) {
    let currSum = 0;
    let maxSum = nums[0];
    for (let i = 0; i < nums.length; i++){
        // i have no idea why drop negative number
        if (currSum < 0){
            currSum = 0;
        } 
        currSum += nums[i];
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum;
};

const res = _maxSubarray([-1, -2, -3, -5, -2, -1, -1, -5, -4]);
//      0   -2
//  -2  -2  -2

console.log(res);