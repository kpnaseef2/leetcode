/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let text = "";
    let max = 0;

    for (let char of s) {
        let index = text.indexOf(char);

        if (index !== -1) {
            text = text.slice(index + 1);
        }

        text += char;
        max = Math.max(max, text.length);
    }

    return max;

};