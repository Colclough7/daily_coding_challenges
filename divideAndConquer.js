/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
Return as a number.*/



function divCon(x){
let num = x.filter(item=>typeof item === "number").reduce((acc,i)=>acc+i,0)
let string = x.filter(item=>typeof item === "string").map(item=>+item).reduce((acc,i)=>acc+i,0)
  return num - string
}





