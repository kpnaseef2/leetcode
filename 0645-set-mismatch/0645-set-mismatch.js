/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let a=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                a.push(nums[i]);
            }
        }
    }
    for(let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            a.push(i);
        }
    }
    return a;
};