/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let currA = 0;
    let currB = 0;
    let res = [];
    while(currA < A.length && currB < B.length ) {
        let [startA, endA] = A[currA];
        let [startB, endB] = B[currB];
        
        let start = Math.max(startA, startB); 
        let end = Math.min(endA, endB); 
        
        if(start <= end) {
            res.push([start,end]);
        }
        
        if(endA < endB) {
            currA++;
        }else if(endB < endA) {
            currB++;
        }else {
            currA++;
            currB++;
        }
    }
    
    return res;
};

// Input: A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
// Reminder: The inputs and the desired output are lists of Interval objects, and not arrays or lists.