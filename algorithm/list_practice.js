
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [2,7,11,15];
const target = 9;
const array = []
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] + nums[i+1] == target){
            array.push(i,i+1)
        }
    }
    return array
};

console.log(twoSum(nums, target))


// Input: nums = [3,2,4], target = 6
// Output: [1,2]
const nums2 = [3,2,4];
const target2 = 6;
const array2 = []
var twoSum2 = function(nums2, target2) {
    for(let i = 0; i < nums2.length; i++){
        if(nums2[i] + nums2[i+1] == target2){
            array2.push(i,i+1)
        }
    }
    return array2
};

console.log(twoSum2(nums2, target2))

// Input: nums = [3,3], target = 6
// Output: [0,1]

const nums3 = [3,3];
const target3 = 6;
const array3 = []
var twoSum2 = function(nums3, target3) {
    for(let i = 0; i < nums3.length; i++){
        if(nums3[i] + nums3[i+1] == target3){
            array3.push(i,i+1)
        }
    }
    return array3
};

console.log(twoSum2(nums3, target3))