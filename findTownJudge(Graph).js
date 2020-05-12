/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let indegree = new Array(N+1).fill(0);
    let outdegree = new Array(N+1).fill(0);
    
    for(var i=0; i<trust.length; i++) {
        outdegree[trust[i][0]] = (outdegree[trust[i][0]] || 0) + 1;
        indegree[trust[i][1]] = (indegree[trust[i][1]] || 0) + 1;
    }
    // console.log('outdegree',outdegree);
    // console.log('indegree',indegree);
    
    for(var k=1; k <= N; k++) {
        if(indegree[k] == N-1 && outdegree[k] == 0) {
            return k;
        }
    }
    
    return -1;
    
};

//84ms
var findJudge = function(N, trust) {
   
   if (trust.length < N - 1) {
       return -1;
   }
   
   let outDegrees = Array(N+1).fill(0);
   let inDegrees = Array(N+1).fill(0);
   
   for(let relation of trust){
       outDegrees[relation[0]]++;
       inDegrees[relation[1]]++;
   }
   
   for(let i=1; i<=N; i++){
       if(inDegrees[i] == N-1 && outDegrees[i] == 0){
           return i;
       }
   }
   
   return -1
};