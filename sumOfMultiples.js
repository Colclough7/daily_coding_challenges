/*Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"*/



function sumMul(n,m){
//your idea here
   let r = 0;
  for(let i = 1; i*n<m; i++){
    r+=i*n
  }
  return r > 0 ? r : 'INVALID'
}
