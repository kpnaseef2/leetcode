/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let count = {};
    let vowel = 0;
    let consonant = 0;

    for (let ch of s) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let ch in count) {
          if ("aeiou".includes(ch)) {
            vowel = Math.max(vowel, count[ch]);
        } else {
            consonant = Math.max(consonant, count[ch]);
        }
    }

    return vowel + consonant;
};