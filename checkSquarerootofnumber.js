/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for (var i = 1; i * i <= num; i++) { 
  
        if ((num % i == 0) && (num / i == i)) { 
            return true; 
        } 
    } 
    return false; 
}; //58ms

//30ms
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num <= 0) return false
    
    let i = 1
    
    while (i * i < num) i += 1
    
    return i * i === num
};