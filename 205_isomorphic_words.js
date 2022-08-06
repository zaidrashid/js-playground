/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const sKey = s[i];
        const tValue = t[i];
        if (map.has(sKey) && map.get(sKey) !== tValue) {
            return false;
        }
        if (map.has(sKey) && map.get(sKey) === tValue) {
            continue;
        }
        if (map.has(tValue)) {
            if(map.get(tValue) === tValue) {
                return false
            }
        } 
        map.set(sKey, tValue);
    }
    const set = new Set([...map.values()]);
    const finalCheck = set.size == map.size;
    return finalCheck;
};

console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('badc', 'baba')); // false
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('egcd', 'adfd')); // false
console.log(isIsomorphic('aaaa', 'aaaa')); // true
