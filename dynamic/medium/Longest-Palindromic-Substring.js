/**
 * @param {string} s
 * @return {string}
 */
var s = "babad";
var longestPalindrome = function (s) {
    s = [...s];
    var arr = [];
    var map = new Map();
    for (var i = 0; i <= s.length - 1; i++) {
        if (map.has(s[s.length - (i + 1)])) {
            arr.push(s[i]);
            return arr.join("");
        } else {
            arr.push(s[i]);
            map.set(s[i]);
        }
    }

};
console.log(longestPalindrome(s));
