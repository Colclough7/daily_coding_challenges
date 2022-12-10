/*Your task is to write function factorial.*/






function factorial(n){
  //your code here
  if(n < 0) return -1
  else if(n === 0) return 1
  else return (n*factorial(n - 1))
  
}
