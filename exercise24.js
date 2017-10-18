/*
EXERCISE 24:

        Write a function called "longestWord" that takes a parameter called "str" and returns the biggest word in "str" (a word is anything separated by a space that doesn't include commas or periods).
        Preference is given to earlier words in the case of a tie.
        You may assume that commas and periods only appear at the ends of words.
        
        For example:

        longestWord("A really long sentence.") should return 'sentence' -- NOT 'sentence.'
        longestWord("Two equally long words are in this sentence.") should return 'equally'
        longestWord("Hey") should return 'Hey'
*/

function longestWord(str){
    str = str.replace(/\./g, '')
            .replace(/\,/g, '');
    var arr = str.split(' ');
    var longest = getLongest(arr);
    return longest;
}

function getLongest(arr){
    var longest = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];   
        }
    }
    return longest;
}