/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sA = s.split('');
    let tA = t.split('');
    let cIndex = 0;
    for (let i=0; i<sA.length; i++) {
       const val = sA[i];
       const rIndex = tA.indexOf(val, cIndex);
       if (rIndex < cIndex) {
          return false; 
       }
       cIndex = rIndex;
    //    tA.splice(rIndex, 1);
    }
    return true;
};

console.log(isSubsequence("aaaaaa","bbaaaa"));
console.log(isSubsequence("ab","baab"));