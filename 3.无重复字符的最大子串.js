/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0, str = '', start = 0;
    for(let i = 0; i < s.length; i++) {
        if(str.indexOf(s[i]) === -1) {
            str += s[i];
            maxLen = Math.max(maxLen, str.length);
        }
        else {
            let index = str.indexOf(s[i]);
            start = index + 1;
            str = str.substring(start);
            str += s[i];
        }
    }
    return maxLen;
};