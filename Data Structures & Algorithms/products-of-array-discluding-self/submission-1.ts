class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

    let totalProd = 1
    let zeroCounts = 0
    for (let num of nums) {
        if (num === 0) {
            if (zeroCounts === 0) zeroCounts++
            else if (zeroCounts === 1) return Array.from({ length: nums.length }, () => 0)
        } else totalProd *= num
    }


    return nums.map(num => zeroCounts === 0 ? totalProd/num : num === 0 ? totalProd : 0)
};
}
