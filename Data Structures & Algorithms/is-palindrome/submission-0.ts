class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
    const cleared = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');    

    for (let i = 0; i < cleared.length; i++) {
        if(cleared[i] !== cleared[cleared.length - 1 - i]) return false
    }

    return true
};
}
