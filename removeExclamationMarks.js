/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.*/


function removeExclamationMarks(s) {
  let x = s.split('').filter(str=>str !== '!').join('')
  return x
}
