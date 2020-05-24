class Solution {
    
    int rec(int[][] matrix, int i, int j, int memo[][] ) {
        if(i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length || matrix[i][j] == 0)
            return 0;
        if(memo[i][j] != 0) return memo[i][j];
        int ans = 0;
        int l = rec(matrix, i, j + 1, memo), r = rec(matrix, i + 1, j, memo), t = rec(matrix, i + 1, j + 1, memo);
        ans = 1 + Math.min(l, Math.min(r, t));
        memo[i][j] = ans;
        return memo[i][j];
    }
    
    public int countSquares(int[][] matrix) {
        int ans = 0;
        int n = matrix.length, m = matrix[0].length;
        int memo[][] = new int[n][m];
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(matrix[i][j] == 1) 
                    ans += rec(matrix, i, j, memo);
            }
        }

        return ans;
    }
    
}

// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation: 
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.