/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let s;
    let r=[];
     s=nums.sort((a,b)=>{
        return a-b;
    });
    for(let i=0;i<s.length;i++){
        if(s[i]===target){
            r.push(i);
        }
    }
    return r;
};
