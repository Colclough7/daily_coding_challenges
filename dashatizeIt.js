/*Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. 
If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'*/




function dashatize(num) {
  //get 'em
   if (Number.isNaN(num))
        return 'NaN';
    return (Math.abs(num).toString().split('').map((n,i,a)=>{
        let isFirstLetter = i == 0;
        let isLastLetter = i === a.length - 1;
        let isOdd = Boolean(+n % 2);
        let isNextOdd = Boolean(+a[i + 1] % 2);
        let isPrevOdd = Boolean(+a[i - 1] % 2);
        return isFirstLetter ? n : (isOdd || isPrevOdd ? `-${n}` : `${n}`);
    }
    ).join(''));
}
