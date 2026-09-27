class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operands = ['+', '-', '*', '/']
        const stack: number[] = []

        for (let i = 0; i < tokens.length; i++) {
            // this should have some error handeling but this is assuming it gets clean tokens for simplicty
            if (!operands.includes(tokens[i])) {
                stack.push(Number(tokens[i]))
            } else {
                const first = stack.pop()!
                const second = stack.pop()!
                let output: number
                switch (tokens[i]) {
                    case '+':
                        output = first + second
                        break;
                    case '-':
                        output = second - first
                        break;
                    case '*':
                        output = first * second
                        break;
                    case '/':
                        output = Math.trunc(second / first)
                        break;
                }
                stack.push(output!)
            }
        }
        return stack.pop()!
    }
}

