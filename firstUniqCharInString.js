var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
            return i
        }

    }
    return -1
};
//eg loveleetcoe => output 2 (v) 

//method 2: 
var firstUniqChar = function(s) {
    const elements = s.split("");
    let index = null;
    // console.log(elements);
    for (let element of elements) {
        // console.log(element);
        index = s.indexOf(element);
        // console.log(index);
        // console.log(s.indexOf(element, index + 1));
        if(index > -1) {
            if(s.indexOf(element, index + 1) === -1) {
                return index;
            } else {
                index = -1;
            }
        }
    }
    if (s.length === 0) {
        return -1;
    } else {
        return index;
    }
};
