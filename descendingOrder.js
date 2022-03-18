//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.

//Examples:

//Input: 42145 Output: 54421

//Input: 145263 Output: 654321

//Input: 123456789 Output: 987654321


function descendingOrder(n){
let result = [...n.toString()].sort((a,b)=>b-a).join('')
return +result
}

// this functions excepts a positive integer
//convert the number into a string (.toString())
//spread the string into a array
//sort the numbered strings by decending order w/ sort method
//join the array 
//change the string back into a number (+n)
