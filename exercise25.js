/*
EXERCISE 25:

        Write a function called "toTitleCase" that takes a parameter called "str" and returns a version of "str" where every word is title-case.
        Title-case is where the first letter (and only the first letter) of every word is capitalized.
        
        For example:

        toTitleCase("A new sentence.") should return 'A New Sentence'
        toTitleCase(["bob") should return 'Bob'
        toTitleCase("a BORING Sentence.") should return 'A Boring Sentence'
*/

function toTitleCase(str){
    str = str.toLowerCase().split(' ');                
    for(var i = 0; i < str.length; i++){               
          str[i] = str[i].split('');                    
          str[i][0] = str[i][0].toUpperCase();          
          str[i] = str[i].join('');                     
     }
     return str.join(' ');                              
}
    
