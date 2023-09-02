/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = [0]
    for(let i=1;i<n+1;i++){
      if(i%2 === 0){
        console.log(res[Math.floor(i/2)]);
        res.push(res[Math.floor(i/2)])
      } else {
        console.log(res[Math.floor(i/2)]+1);
        res.push(res[Math.floor(i/2)]+1)
      }
    }
    return res
};
countBits(5);