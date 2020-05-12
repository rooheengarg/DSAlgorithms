//eg[1,1,2,3,3,7,7] given sorted array find the non duplicate one

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    if (nums.length === 0) {
      return 0
    }
    
    function binarySearch() {
      let start = 0
      let end = nums.length
      
      while (start <= end) {
        let middle = Math.floor((start + end) / 2)
  
        if (nums[middle + 1] === nums[middle]) {
          if (middle % 2 === 0) {
            start = middle + 1 
          }
          else {
            end = middle
          }
        }
        else if (nums[middle - 1] === nums[middle]) {
          if (middle % 2 === 0) {
            end = middle
          }
          else {
            start = middle + 1
          }
        }
        else {
          return nums[middle]
        }
      }
      return -1
    }
  
    return binarySearch()
  };