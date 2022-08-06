/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    // max index
    let insertIdx = m + n - 1;
      
    // start from the back, the highest
    m -= 1;
    n -= 1;
   
    while (n > -1) {
        if (nums1[m] > nums2[n]) {
            nums1[insertIdx] = nums1[m];
            m--;
        } else {
            nums1[insertIdx] = nums2[n];
            n--
        }
        insertIdx--;
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));