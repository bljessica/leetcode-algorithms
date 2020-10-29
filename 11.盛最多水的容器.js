/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let i = 0, j = height.length - 1;// 双指针
    while(i < j) {
        max = Math.max(max, (j - i) * (height[i] > height[j]? height[j--]: height[i++]));
    }
    return max;
};