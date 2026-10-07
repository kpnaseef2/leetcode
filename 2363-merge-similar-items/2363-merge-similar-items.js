/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let result = [...items1, ...items2];

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {

            if (result[i][0] == result[j][0]) {
                result[i][1] += result[j][1];
                result.splice(j, 1);
                j--;
            }
        }
    }

    result.sort((a, b) => a[0] - b[0]);

    return result;
};
