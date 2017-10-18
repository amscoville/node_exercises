/*
EXERCISE 12:

        Write a function called "getAppearances" that takes two parameters called "arr" and "input" and returns the total number of times "input" appears in "arr";
        
        For example:

        getAppearances([1,2,3,2,6,2],2) should return 3
        getAppearances([1,2,3,4],5) should return 0
        getAppearances(['eeny','meeny','miney','moe'],'moe') should return 1
*/

function getAppearances(arr,input){
    var inputCount = 0;
    for (var index = 0; index < arr.length; index++) {
        if ( arr[index] === input) {
            inputCount++;
        }
    }
    return inputCount;
}