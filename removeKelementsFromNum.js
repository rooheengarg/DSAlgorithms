// The idea is based on the fact that a character among first (n+1) characters must be there in resultant number. So we pick the smallest of first (n+1) digits and put it in result, and recur for remaining characters. Below is complete algorithm.
// Initialize result as empty string
//      res = ""
// buildLowestNumber(str, n, res)
// 1) If n == 0, then there is nothing to remove.
//    Append the whole 'str' to 'res' and return

// 2) Let 'len' be length of 'str'. If 'len' is smaller or equal 
//    to n, then everything can be removed
//    Append nothing to 'res' and return

// 3) Find the smallest character among first (n+1) characters
//    of 'str'.  Let the index of smallest character be minIndex.
//    Append 'str[minIndex]' to 'res' and recur for substring after
//    minIndex and for n = n-minIndex

//      buildLowestNumber(str[minIndex+1..len-1], n-minIndex).
//eg. Input: num = "1432219", k = 3
// Output: "1219"
var buildSmallestString = function(num,k) {
    if (k == 0) {
       this.res += (num[0] == "0" && !this.res) ? num.substr(1) : num ;
        return; //10200 , 1 casee ==>op 200
    }
     
       if (num.length <= k) //112 =num , k=1 case
          return; 
      
      let minIndex = 0;
      for(var i=1; i<=k; i++) {
          if(num[i] < num[minIndex]) minIndex=i;
      }
      
      this.res += (num[minIndex] == "0" && !this.res) ? '' : num[minIndex];
      num = num.substr(minIndex+1);
      buildSmallestString(num,k-minIndex);
      
  }
  var removeKdigits = function(num, k) {
    if(num.length === k) {
          return "0";
      }
      
      this.res = '';
      buildSmallestString(num,k);
      return this.res ? this.res : "0"; //"10", 1 CASE
      
  };


  //using stacks

  var removeKdigits = function(num, k) {
    let stack = [];
    
    for (let i = 0, len = num.length; i < len; i++) {
      let curr = num[i];
      while (stack.length > 0 && k > 0 && curr < stack[stack.length - 1]) {
        stack.pop();
        k--;
      }
      stack.push( curr );
    }
    
    // 如果 k > 0，从末尾删除掉 足够的值即可
    while (k > 0) {
      stack.pop();
      k--;
    }
    
    // 去除首位的无效 0
    while (stack.length > 0 && stack[0] === '0') {
      stack.shift();
    }
    
    return stack.length > 0 ? stack.join( '' ) : '0';
  };