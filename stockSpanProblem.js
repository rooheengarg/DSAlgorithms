//https://www.geeksforgeeks.org/the-stock-span-problem/
// C++ linear time solution for stock span problem 
// #include <iostream> 
// #include <stack> 
// using namespace std; 
  
// // A stack based efficient method to calculate 
// // stock span values 
// void calculateSpan(int price[], int n, int S[]) 
// { 
//     // Create a stack and push index of first 
//     // element to it 
//     stack<int> st; 
//     st.push(0); 
  
//     // Span value of first element is always 1 
//     S[0] = 1; 
  
//     // Calculate span values for rest of the elements 
//     for (int i = 1; i < n; i++) { 
//         // Pop elements from stack while stack is not 
//         // empty and top of stack is smaller than 
//         // price[i] 
//         while (!st.empty() && price[st.top()] <= price[i]) 
//             st.pop(); 
  
//         // If stack becomes empty, then price[i] is 
//         // greater than all elements on left of it, 
//         // i.e., price[0], price[1], ..price[i-1].  Else 
//         // price[i] is greater than elements after 
//         // top of stack 
//         S[i] = (st.empty()) ? (i + 1) : (i - st.top()); 
  
//         // Push this element to stack 
//         st.push(i); 
//     } 
// } 
  
// // A utility function to print elements of array 
// void printArray(int arr[], int n) 
// { 
//     for (int i = 0; i < n; i++) 
//         cout << arr[i] << " "; 
// } 
  
// // Driver program to test above function 
// int main() 
// { 
//     int price[] = { 10, 4, 5, 90, 120, 80 }; 
//     int n = sizeof(price) / sizeof(price[0]); 
//     int S[n]; 
  
//     // Fill the span values in array S[] 
//     calculateSpan(price, n, S); 
  
//     // print the calculated span values 
//     printArray(S, n); 
  
//     return 0; 
// } 

var StockSpanner = function() {
    this.stack = [];
    this.curr = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.curr++;
    if(!this.stack.length) {
        this.stack.push({pos: this.curr, val: price}); 
        return 1;
    } else {
        let {pos, val} = this.stack[this.stack.length - 1];
        while (val <= price) {
            // console.log('popping', val, price)
            this.stack.pop();
            if(!this.stack.length) break;
            console.log(this.stack[this.stack.length - 1] );
            const temp = this.stack[this.stack.length - 1]
            val = temp.val;
            pos = temp.pos;
        }
        // const top = this.stack[this.stack.length - 1] 
        this.stack.push({pos: this.curr, val: price});
        if(this.stack.length == 1) {
            return this.curr + 1;
        } else {
            return this.curr - pos;
        }

    }
};
