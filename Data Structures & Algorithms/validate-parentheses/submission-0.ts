class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
    const stack: string[] = []
    const map: Record<string, string> = { '}': '{', ')': '(', ']': '[' }

    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c === '{' || c === '(' || c === '[') {
            stack.push(c)
        } else {
            if (stack.pop() !== map[c]) return false
        }
    }

    return stack.length === 0
}
}
