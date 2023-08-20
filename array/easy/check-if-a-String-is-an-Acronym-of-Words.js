/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
s = "dp"
words = ["dvn", "acafe"]

var isAcronym = function (words, s) {
    s = [...s];
    var DescidedArray = [];
    if (s.length == words.length) {
        for (var i = 0; i <= words.length - 1; i++) {
            var newWord = [...words[i]];
            if (s[i] == newWord[0]) {
                DescidedArray.push(1);
            }
        }
        if (DescidedArray.length == s.length) {
            console.log( true);
        } else {
            console.log( false);
        }

    } else {
        console.log(false);
    }
};
isAcronym(words, s);

// time complaxity O(n)
// space compaxity O(max(n, m))
