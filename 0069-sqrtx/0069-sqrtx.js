/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = 0 ;
    for(let i = 0; i * i <= x; i++){
        result = i ;
    }
    return result;
};
