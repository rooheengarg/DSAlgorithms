//given a binary tree: [3,9,20,null ,null,15,7], o/p ==> 3

var maxDepthBinaryTree = function(root) {
    let max_depth = 0;

    let DFS = function(node,level) {
        if(node === null) return;

        if(level > max_depth) max_depth = level;

        DFS(node.left, level +1);
        DFS(node.right, level +1);
    }

    DFS(root, 1);
    return max_depth;
}