/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if (!preorder.length) return null
    
    const [root, ...rest] = preorder
    
    const rootNode = new TreeNode(root)
    rootNode.left = bstFromPreorder(rest.filter(n => n < root))
    rootNode.right = bstFromPreorder(rest.filter(n => n > root))
    
    return rootNode
};

// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]


var bstFromPreorder = function(preorder) {
    if (preorder.length === 1) return new TreeNode(preorder[0])
    
    let treeRoot = new TreeNode(preorder[0]);
    
    for (let i = 1; i < preorder.length; i++){
        treeRoot = insertVal(treeRoot, preorder[i])
    }
    return treeRoot
};

const insertVal = (root, val) =>{

    if (root === null) return new TreeNode(val);
    
    if (val <= root.val){
        root.left = insertVal(root.left, val)
    }else{
        root.right = insertVal(root.right, val)
    }
    //returning orignal root with the modified left/right
    return root
}