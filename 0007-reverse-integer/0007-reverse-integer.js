/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     let result = 0;

    while (x !== 0) {
        let digit = x % 10;
        x = parseInt(x / 10);

        if (
            result > 214748364 ||
            (result === 214748364 && digit > 7) ||
            result < -214748364 ||
            (result === -214748364 && digit < -8)
        ) return 0;

        result = result * 10 + digit;
    }

    return result;
};