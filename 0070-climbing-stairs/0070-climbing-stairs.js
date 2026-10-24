/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   if(n===1) return 1;
   if(n===2) return 2;
   let a=1;
    let b=2;
    for(let i=3;i<=n;i++){
        let region=a+b;
        a=b
        b=region;
     
    }
    return b;
};