/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(function(a, b) {
        let x = a + "" + b;
        let y = b + "" + a;

        if (x > y) {
            return -2;
        } else {
            return 1;
        }
    });

    if (nums[0] === 0) {
        return "0";
    }

    return nums.join("");
};