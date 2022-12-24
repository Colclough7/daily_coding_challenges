/*Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)*/



function largestPairSum (numbers) {
  //TODO: Write your Code here
 let answers = numbers.sort((a,b)=>b-a)
 return answers[0] + answers[1]
}
