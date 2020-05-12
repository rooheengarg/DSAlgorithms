/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var floodFillUtil = function(image, sr, sc, newColor, previousColor, x,y) {
    if(sr<0 || sr > x-1 || sc < 0 || sc > y-1) {
        return;
    }
    if(image[sr][sc] != previousColor) {
        return;
    }
     if(image[sr][sc] == newColor) {
        return;
    }
    
    image[sr][sc] = newColor;
    floodFillUtil(image, sr-1,sc,newColor,previousColor,x,y);
    floodFillUtil(image, sr+1,sc,newColor,previousColor,x,y);
    floodFillUtil(image, sr,sc+1,newColor,previousColor,x,y);
    floodFillUtil(image, sr,sc-1,newColor,previousColor,x,y);
    
}
var floodFill = function(image, sr, sc, newColor) {
    let prevColor = image[sr][sc];
    let Ydimension = image[0].length;
    let Xdimension = image.length;
    floodFillUtil(image,sr,sc,newColor,prevColor,Xdimension,Ydimension);
    return image;
};


//56ms soln 
//rather than passing params store in global ,
// before calling recursively check condition prior to it

function dfs(x, y, newColor, oldColor){
    if (this.image[x][y] === oldColor) {
        this.image[x][y] = newColor;
    } else {
        return;
    }
    if (x + 1 < this.xLen) dfs(x + 1, y, newColor, oldColor);
    if (y + 1 < this.yLen) dfs(x, y + 1, newColor, oldColor);
    if (x - 1 >= 0) dfs(x - 1, y, newColor, oldColor);
    if (y - 1 >= 0) dfs(x, y - 1, newColor, oldColor);
}

var floodFill = function(image, sr, sc, newColor) {
    let oldColor = image[sr][sc];
    if (oldColor === newColor) return image;
    
    this.image = image;
    this.xLen = image.length;
    this.yLen = image[0].length;
    
    dfs(sr, sc, newColor, oldColor);
    
    return this.image;
};