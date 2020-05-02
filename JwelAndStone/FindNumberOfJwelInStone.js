// 
//ex. Input: J = "aA", S = "aAAbbbb"
// Output: 3

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let totalCount = 0;
    for(var i=0; i< S.length; i++) {
        totalCount = totalCount + Number(J.includes(S[i]));
    }
    
    return totalCount;
    
};