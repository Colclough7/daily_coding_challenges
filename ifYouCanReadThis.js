/*Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace*/



function to_nato(words) {
	// Go code
  let arr = words.split('').filter(x=> x!== ' ')
  let r = ''
  arr.map((x,i)=>{
    let letter = x.toLowerCase()
    let coded = NATO[letter]
    if(i !== arr.length - 1 && coded) r+=coded + ' '
    else if(i == arr.length- 1 && coded) r += coded
    else if(i !== arr.length - 1 && !coded) r += letter + ' '
    else r+=letter
  })
  return r
}
