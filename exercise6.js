/*
EXERCISE 6:

        Write a small function called "grade" that takes a parameter called "score" and returns the grade that corresponds to that "score".

        Grading Table:
            0-59: 'F'
            60-69: 'D'
            70-79: 'C'
            80-89: 'B'
            90-100: 'A'
        
        For example:

        grade(3) should return 'F'
        grade(89) should return 'B'
        grade(90) should return 'A'
*/

function grade(score){
    if (score >= 90) {
        return 'A';
    } else if (score < 90 && score > 79){
        return 'B';
    } else if (score < 80 && score > 69){
        return 'C';
    } else if (score < 70 && score > 59){
        return 'D';
    } else {
        return 'F';
    }
}

// var grade1 = grade(3);
// console.log(grade1);

// var grade2 = grade(89);
// console.log(grade2);

// var grade3 = grade(90);
// console.log(grade3);