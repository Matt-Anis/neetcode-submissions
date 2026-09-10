class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;
    const sorted = [...nums].sort((a, b) => a - b);
    let longest = 1;

    let i = 0;
    while (i < sorted.length) {
        let current = 1; 
        while (i < sorted.length - 1 && (sorted[i + 1] === sorted[i] + 1 || sorted[i + 1] === sorted[i])) {
            if (sorted[i + 1] === sorted[i] + 1) current++; 
            i++;
        }
        longest = Math.max(longest, current);
        i++;
    }

    return longest;
}
}
