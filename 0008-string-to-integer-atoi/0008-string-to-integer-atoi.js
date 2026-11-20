/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
        let i = 0;
    let num = 0;
    let sign = 1;

    while (s[i] === " ") i++;

    if (s[i] === "-" || s[i] === "+") {
        if (s[i] === "-") sign = -1;
        i++;
    }

    while (s[i] >= "0" && s[i] <= "9") {
        num = num * 10 + (s.charCodeAt(i) - 48);
        i++;
    }

    num = num * sign;

    if (num > 2147483647) return 2147483647;
    if (num < -2147483648) return -2147483648;

    return num;
};