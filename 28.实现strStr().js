/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    let len = needle.length;
    for(let i = 0; i <= haystack.length - len; i++) {
        if(haystack.substring(i, i + len) === needle) return i;
    }
    return -1;
};