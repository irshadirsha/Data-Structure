var searchInsert = function(nums, target) {
    console.log(nums,target)
    for(let i=0;i<nums.length;i++){
        if(target==0){
            return "target not found"
        }
        if(nums[i]==target){
            
            return i
        }
        if(target>nums[i] && target<nums[i+1]){
            return i+1
        }
        if(target>nums[nums.length-1]){
            return nums.length
        }
       
    }
};

nums = [1,3,5,6], tar = 0
console.log(searchInsert(nums,tar))