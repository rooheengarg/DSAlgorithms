// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

var findComplement = function(num) {
    let result = ''
    const binary = num.toString(2)
    for (let i = 0; i < binary.length; i++) {
        result += binary[i] ^ 1
    }
    return parseInt(result, 2)
}; //50ms

var findComplement = function(num) {
    let reverse = 0
    let res = 0
    let length = (num.toString(2)).length
    while (num) {
        reverse = reverse << 1
        reverse += num & 1
        num = num >> 1
    }
    
    for (let i = 0; i < length; i++) {
        res = res << 1
        if ((reverse & 1) === 0) {
            res += 1
        } 
        reverse = reverse >> 1
    }

    return res
};//44ms