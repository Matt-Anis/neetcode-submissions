class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
    let seen = new Map<number, number>()

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i]
        if (seen.has(complement)) return [seen.get(complement)! + 1, i + 1]
        seen.set(numbers[i], i)
    }

    return []
};
}
