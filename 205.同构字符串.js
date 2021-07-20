/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    const map = {}
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            if (t[i] !== map[s[i]]) {
                return false
            }
        } else {
            if (Object.values(map).find(item => item === t[i])) {
                return false
            }
            map[s[i]] = t[i]
        }
    }
    return true
};
