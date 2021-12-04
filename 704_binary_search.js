const fs = require('fs');

// test input
// -10000 -1 0 1 4 6 7 8 10 12 16 18 20 30 31 40 41 43 44 10000
// 6

function implementFunction_old(nums, target) {
    for(index = 0; index < nums.length; index++) {
        if (nums[index] === target) {
            console.log(`How many times it took to find you: ${index + 1}`);
            return index;
        }
    }
    console.log(`Target not found but I just wasted ${index} times looking for you`);
    return -1
}

function implementFunction(nums, target) {
    if (nums.length === 1 && nums[0] === target) {
        return 0;
    }

    // initial
    let leftIndex = 0;
    let rightIndex = nums.length-1; // 19

    let count = 1;
    let pivotIndex = -1

    // repeating process
    while (leftIndex <= rightIndex){
        pivotIndex = Math.ceil(leftIndex + ((rightIndex-leftIndex)/2));
        
        if (nums[pivotIndex] === target) {
            // console.log(`How many times it took to find you: ${count}`);
            return pivotIndex;
        } else if (pivotIndex === rightIndex) {
            if (nums[leftIndex] === target) {
                return leftIndex;
            }
        }
    
        // 6 < 16 = true
        if (target < nums[pivotIndex]) {
            rightIndex = pivotIndex -1
        } else {
            leftIndex = pivotIndex + 1;
        }
        count++;
    }

    // console.log(`Target not found but I just wasted ${count} times looking for you`);
    return -1;
}

fs.readFile('./__test_input', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;s
    }

    const inputArr = data.split('\n');
    const nums = inputArr[0].split(' ').map(val => parseInt(val, 10));
    const target = parseInt(inputArr[1], 10);
    const res = implementFunction(nums, target);
    console.log(res);
})