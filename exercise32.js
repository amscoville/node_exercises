/*
EXERCISE 32:

        Write a function called "isValidCardFormat" that takes a parameter called "number" and returns whether it is a correctly-formatted credit card number.

        Valid credit card numbers have a prefix (the first numbers) that matches a particular type of card.
        Valid credit card numbers will also have a length that matches the type of card.
                         __________________________________
                         |       Prefix        |  Length  |
                         ----------------------------------
                    Visa |          4          | 13 or 16 |
        American Express |       34 or 37      |    15    |
              MasterCard |        51-55        |    16    |
                Discover |        6011         |    16    |
            Diner's Club | 300-305 or 36 or 38 |    14    |
                         ----------------------------------

        For example:

        isValidCardFormat("4175937769982") should return true //visa with length of 13
        isValidCardFormat("4175937769982456") should return true //visa with length of 16
        isValidCardFormat("3035937769982456") should return false //Diner's Club with a length of 16
        isValidCardFormat("5635937769982456") should return false //Invalid prefix with a length of 16    
*/

function isValidCardFormat(number){
    var checkForOnlyNumbers = /^[0-9]*$/;
    if (checkForOnlyNumbers.test(number)) {
        if(checkVisa(number)){
            return true;
        }
        else if(checkAmericanExpress(number)){
            return true;
        }
        else if(checkMasterOrDisc(number)){
            return true;
        }
        else if(checkDinersClub(number)){
            return true;
        } 
        else{
            return false;
        } 
    }
    else {
        return false;
    }
}

function checkVisa(string){
    var startsWithVisaPre = /^4/;
    if(startsWithVisaPre.test(string)){
        return (string.length === 13 || string.length === 16);
    }
}

function checkAmericanExpress(string){
    var startsWithAmExPre = /^(34|37)/;
    if(startsWithAmExPre.test(string)){    
        return string.length === 15;
    }
}

function checkMasterOrDisc(string){
    var startsWithMasterOrDiscPre = /^(5[1-5]|6011)/;
    if(startsWithMasterOrDiscPre.test(string)){    
        return string.length === 16;
    }
}

function checkDinersClub(string){
    var startsWithDinersClubPrefix = /^(3[0][0-5]|36|38)/;
    if(startsWithDinersClubPrefix.test(string)){
        return string.length === 14;
    }
}

// var answer = isValidCardFormat('3841937769982478');
// console.log(answer);

// function isValidCardFormat(number){
//     var checkForOnlyNumbers = /^[0-9]*$/;
//     if (checkForOnlyNumbers.test(number)) {
        
        
//         var regex4 = 
//         }
//         if (regex2.test(number)){
            
//         }
//         if (regex3.test(number)) {
//             if(number.length === 16){
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//         if (regex4.test(number)){
//             if (number.length === 14){
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     }
//     else {
//         return false;
//     }
// }




