// https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
//localmax[i] = max(A[i], A[i]+localmax[i-1]);
// time complexity of Kadane’s Algorithm is O(n)
var findMaxSumSubArray = function(arr) { 
    let n = arr.length;
    let local_max = 0;
    let globalMax = -Infinity;
    for (var i = 0 ; i< n; i++){
        local_max = Math.max(arr[i], arr[i] + local_max);
        if(local_max > globalMax) globalMax = local_max;
    }
    return globalMax;
    }



//Case of circular array 
//There can be two cases for the maximum sum:

//Case 1: The elements that contribute to the maximum sum are arranged such that no wrapping is there. 
// Examples: {-10, 2, -1, 5}, {-2, 4, -1, 4, -1}. In this case, Kadane’s algorithm will produce the result.

// Case 2: The elements which contribute to the maximum sum are arranged such that wrapping is there.
//  Examples: {10, -12, 11}, {12, -5, 4, -8, 11}. In this case, we change wrapping to non-wrapping. 
// Let us see how. Wrapping of contributing elements implies non wrapping of non contributing elements, 
// so find out the sum of non contributing elements and subtract this sum from the total sum. To find out the sum of non contributing,
//  invert sign of each element and then run Kadane’s algorithm.var kadaneAlgo = function(A, n) {
   //https://www.youtube.com/watch?v=s1CYAnJwf50
    var kadaneAlgo = function(A, n) {
        let local_max = 0;
        let global_max = -Infinity;
        for(var i=0; i< n; i++) {
            local_max = Math.max(A[i], A[i]+local_max);
            global_max= Math.max(global_max,local_max);
        }
        
        return global_max;
    }
    var maxSubarraySumCircular = function(A) {
        let n = A.length;
        let max_kad = kadaneAlgo(A,n);
        let max_sum=0;
        for(var i= 0; i< n; i++) {
            max_sum += A[i];
            A[i] = -A[i];
        }
         let invert_max_kad=kadaneAlgo(A, n);
        max_sum = invert_max_kad+max_sum;
        max_kad = max_sum === 0 ? max_kad : Math.max(max_kad,max_sum);
        
        return max_kad;
    
    };