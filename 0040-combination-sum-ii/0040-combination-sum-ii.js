/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
        let result = [];
    candidates.sort((a, b) => a - b);

    function solve(start, sum, arr) {
        if (sum === target) {
            result.push([...arr]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            arr.push(candidates[i]);
            solve(i + 1, sum + candidates[i], arr);
            arr.pop();
        }
    }

    solve(0, 0, []);
    return result;
};