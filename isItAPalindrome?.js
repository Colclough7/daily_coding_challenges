/*Write a function that checks if a given string (case insensitive) is a palindrome.*/


function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
    return str == str.split('').reverse().join('');
}
