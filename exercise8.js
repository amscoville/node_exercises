/*
EXERCISE 8:

        Write a small function called "fifthOdd" that takes a parameter called "num" and, starting with input, returns the 5th odd number.
        
        For example:

        fifthOdd(1) should return 9
        fifthOdd(0) should return 9
        fifthOdd(-1) should return 7
*/

function fifthOdd(num){
    if (num % 2 === 0) {
        return num + 9;
    } else {
        return num + 8; 
    } 
}



// var result1 = fifthOdd(1);
// console.log(result1);

// var result2 = fifthOdd(0)
// console.log(result2);

// var result3 = fifthOdd(-1);
// console.log(result3);

// var oddCount = 0;
//     while (oddCount < 5) {
//         if (num % 2 === 0) {
            
//         }
//     }