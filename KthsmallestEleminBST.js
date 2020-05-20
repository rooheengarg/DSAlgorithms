/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res;
    
    function traverse(node) {
        if (!node) return;
        
        traverse(node.left);
        k--;
        
        if (k === 0) {
            res = node.val;
            return;
        }
        
        traverse(node.right)
    }
    
    traverse(root)
    return res;
};


//my soln

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var inOrderTraversal = function(root) {
    if (root !== null) {
      inOrderTraversal(root.left);  
      this.result.push(root.val);  
      inOrderTraversal(root.right);
   }
}
var kthSmallest = function(root, k) {
    this.result = [];
    this.len = k;
    inOrderTraversal(root);
    console.log('result', this.result);
     return this.result[k-1];
};

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3