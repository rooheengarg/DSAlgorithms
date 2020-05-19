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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
class Pairobj {
    constructor(depth, parent) {
      this.depth = depth;
      this.parent = parent;
    }
  }
  
  var traverse = function(root,depth,parent) {
    if(root === null) {
      return;
    }
    
    this.hashMap.set(root.val, new Pairobj(depth,parent));
    traverse(root.left, depth+1, root.val);
    traverse(root.right, depth+1, root.val);
      
    
  }
  var isCousins = function(root, x, y) {
      console.log('root', root);
      this.hashMap = new Map();
      traverse(root, 0,0);
      if(this.hashMap.get(x).depth == this.hashMap.get(y).depth && this.hashMap.get(x).parent                != this.hashMap.get(y).parent){
             return true;
         }
         return false;
      
  };

  //root representtion
//   root TreeNode {
//     val: 1,
//     left:
//      TreeNode {
//        val: 2,
//        left: TreeNode { val: 4, left: null, right: null },
//        right: null },
//     right: TreeNode { val: 3, left: null, right: null } }
//https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/