class Solution {
    encode(strs: string[]): string {
        const joined = strs.join('')

        let signature = ''
        for (let str of strs) {
            signature += `${str.length} `
        }

        return joined + '#' + signature
    }

    decode(str: string): string[] {
        const hashIndex = str.lastIndexOf('#')
        const joined = str.slice(0, hashIndex)
        const signature = str.slice(hashIndex + 1)

        const lengths = signature.trim().length === 0
            ? []
            : signature.trim().split(' ').map(Number)

        let output: string[] = []
        let index = 0

        for (let length of lengths) {
            output.push(joined.slice(index, index + length))
            index += length
        }

        return output
    }
}