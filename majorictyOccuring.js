var majorityElement = function(nums) {
    let obj={}
    let largeCount=0
    let val
     if(nums.length==1){
     return nums[0]
    }
    for(i=0;i<=nums.length-1;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
            if( obj[nums[i]]>largeCount){
                largeCount=obj[nums[i]]
                val=nums[i]
            }
        }else{
            obj[nums[i]]=1
        }
    }
    return val
};

//eh [1,1,2,2,2,2,2,1,1]  => o/p 2

var majorityElement = function(nums) {
    let majority = nums[0]
    let n = 1
    
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === majority) n++
      else n--
      
      if (n === 0) {
        majority = nums[i]
        n++
      }
    }
    
    return majority
  };

  const majorityElement = function(nums) {
    let candidate;
    let count = 0;
    for (const num of nums) {
      if (num === candidate) {
        count++;
      } else if (count === 0) {
        candidate = num;
        count = 1;
      } else {
        count--;
      }
    }
    return candidate;
  };