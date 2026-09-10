class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let rows = Array.from({ length: 9 }, () => new Set<string>())
        let cols = Array.from({ length: 9 }, () => new Set<string>())
        let boxes = Array.from({ length: 9 }, () => new Set<string>())

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {

                const val = board[i][j]

                if (val === '.') continue
                const boxIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3

                if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) return false

                rows[i].add(val)
                cols[j].add(val)
                boxes[boxIndex].add(val)
            }
        }


        return true
    };


}
