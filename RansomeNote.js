/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote == null || ransomNote.trim() == '') 
        return true;

    if (magazine == null || magazine.trim()== '') 
        return false;

if(ransomNote.length > magazine.length) {
    return false;
} else {
let arr = magazine.split('');
let flag = false;
    for(var i=0; i<ransomNote.length; i++) {
        let index = arr.indexOf(ransomNote[i]);
       if(index > -1 ) {
           arr.splice(index, 1);
           flag = true;
       } else {
           flag = false;
           break;
       }
    }
    
    return flag;
    
}

};