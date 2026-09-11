class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
    if(heights.length === 0) return 0

    let left = 0
    let right = heights.length - 1
    let max = 0

    while (right > left) {
        let prod = Math.min(heights[right], heights[left]) * (right - left)
        if (prod > max) {
            max = prod
        }

        if (heights[right] > heights[left]){
            left++
        } else {
            right--
        }
    }

    return max
}
}
