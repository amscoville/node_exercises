/*
EXERCISE 28:

        Write a function called "sameIngredients" that takes two parameters called "str1" and "str2" and returns true/false whether str1 is composed only of characters found in str2 (case-insensitive).

        For example:

        sameIngredients("bob","jane") should return false
        sameIngredients("Bob","bobby") should return true
        sameIngredients("indy books for sale.","KIND Boars left you alone.") should return true
*/

function sameIngredients(str1,str2){
    var arr1 = str1.toLowerCase().replace(/\W/g, '').split('');
    var arr2 = str2.toLowerCase().replace(/\W/g, '').split('');

    var i = 0;

    while (i < arr1.length) {
        if (arr2.includes(arr1[i]) === false){
            return false;
        } else {
            i++;
        }
    }
    return true;
}


