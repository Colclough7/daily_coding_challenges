/*In this simple exercise, you will create a program that will take two lists of integers, a and b. 
Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. 
Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.*/



function findDifference(arr1, arr2) {
  let result1 = arr1[0];
  let result2 = arr2[0];
  for (let i = 1; i < arr1.length; i++) {
    result1 *= arr1[i];
  }
  for (let j = 1; j < arr2.length; j++) {
    result2 *= arr2[j];
  }
  return Math.abs(result1 - result2);
}


