/*Given a string s, find the length of the longest substring without repeating characters.*/

/**
 * @param {string} s
 * @return {number}
 */
var s = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    left = 0;
    maxSize = 0;
    for (var i = 0; i <= s.length - 1; i++) {
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1);

    }
    return maxSize;
}

console.log(lengthOfLongestSubstring(s));

// complaxity
// time =O(n);
// space = O(min(n, m));