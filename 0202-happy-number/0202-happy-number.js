/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while(n!==1 && n!==4){
        let s=0;
        let re=String(n).split("");
        for(let i=0;i<re.length;i++){
            s=s+re[i]*re[i];
        }
        n=s;
    }
    return n===1;
};