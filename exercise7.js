/*
EXERCISE 7:

        Write a small function called "getDanceStyle" that takes a parameter called "time" and a parameter called "tempo" and returns the dance style that corresponds to both. If no style matches perfectly, then return the string "no match found".

        Dance Style Table:

                                 TIME SIGNAURE
                      ____4/4____ ____2/4____ ____3/4____
             84-93   |           |           | 'Waltz'
             150-180 |           |           | 'Viennese Waltz'
     TEMPO   112-128 | 'Cha-Cha' |           |
             152-176 | 'Jive'    |           |
             120-132 |           | 'Tango'   |
        

        For example:

        getDanceStyle('4/4',120) should return 'Cha-Cha'
        getDanceStyle('2/4',120) should return 'Tango'
        getDanceStyle('3/4',94) should return 'no match found'
*/

function getDanceStyle(time,tempo){
    if (time === '4/4' && tempo < 129 && tempo > 113) {
            return 'Cha-Cha';
    } else if (time === '4/4' && tempo < 177 && tempo > 151) {
            return 'Jive';
    } else if (time === '2/4' && tempo < 133 && tempo > 119) {
            return 'Tango';
    } else if (time === '3/4' && tempo < 94 && tempo > 83) {
            return 'Waltz';
    } else if (time === '3/4' && tempo < 181 && tempo > 149) {
            return 'Viennese Waltz';
    } else {
            return 'no match found';
    }
}

// var dance1 = getDanceStyle('4/4',120);
// console.log(dance1);

// var dance2 = getDanceStyle('2/4',120);
// console.log(dance2);

// var dance3 = getDanceStyle('3/4', 94);
// console.log(dance3);