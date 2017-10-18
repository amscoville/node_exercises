/*
EXERCISE 26:

        Write a function called "isPalindrome" that takes a parameter called "str" and returns whether "str" is a palindrome without respect to punctuation, spaces, or capitalization.
        
        For example:

        isPalindrome("Tacocat .") should return true
        isPalindrome("Niagara") should return false
        isPalindrome("T ac' ocat.   ") should return true
*/


function isPalindrome(str){
    var newStr = str.toLowerCase().replace(/\W/g, '');
    var arr = newStr.split('');
    var reverseStr = arr.reverse().join('');
    return newStr === reverseStr;
}







