let BAD_VERSION = 4;
let VERSIONS = 5;
// 1 2 3 4 5
var isBadVersion = function(x) {
    return x === BAD_VERSION;
};
var test = function(n) {
    let start = 1;
    let end = n;
    
    let bv;
    do{
        let mid = start + Math.floor( (end-start) / 2 ); 
        let res = isBadVersion(mid);
        // go towards start, change end
        if (res) {
            bv = mid;
            end = mid - 1;
        } else {
            // go towards end, change start
            start = mid + 1;
        }
    } while(start<end);
    return bv
};

test(VERSIONS);