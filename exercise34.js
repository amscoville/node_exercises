/*
EXERCISE 34:

        This and the next few node exercises are going to be a little different - instead of you writing a function to solve a problem and us testing your solution, we're going to solve a problem and you're going to test our solutions.
        In order to test our solutions (we'll write several - some good and many bad), you'll make use of the Jasmine testing syntax found at jasmine.github.io.
        When you submit your tests, we'll run them against our solutions and see if the tests pass and fail when they should. 
        Some of these problems may look a little familiar...

        Write a test suite and specs to test a function called "isValidNumber()" 
        "isValidNumber" takes a string parameter called "number" and returns whether that string is a valid Irish Mobile Phone Number

        Valid phone numbers are comprised of 10 numerical digits.
        Valid phone numbers all begin with "08", followed by either a 3, 5, 6, or 7 and then 7 other digits.

        For example:

        isValidPhone("0877654233") should return true
        isValidPhone("0737654233") should return false //doesn't begin with 08
        isValidPhone("08576542336") should return false //wrong number of digits
        isValidPhone("0827654233") should return false //third digit isn't in (3,5,6,7)      
*/

describe('isValidPhone', function() {
    it('should be comprised of 10 numerical digits', function() {
        expect(isValidPhone('0834716295')).toBe(true); //valid
        expect(isValidPhone('083471629')).toBe(false); //too short
        expect(isValidPhone('083471629554')).toBe(false); //too long
    });
    it('should start with "08"', function() {
        expect(isValidPhone('0877654233')).toBe(true); //isValid
        expect(isValidPhone('2534716295')).toBe(false); //prefix is not '08'
    });
    it('should have 3, 5, 6, or 7 following prefix', function() {
        expect(isValidPhone('0834716295')).toBe(true); //prefix followed by '3'
        expect(isValidPhone('0854716295')).toBe(true); //prefix followed by '5'
        expect(isValidPhone('0864716295')).toBe(true); //prefix followed by '6'
        expect(isValidPhone('0874716295')).toBe(true); //prefix followed by '7'
        expect(isValidPhone('0824716295')).toBe(false); //prefix followed by number other than '3', '5', '6', or '7' 
    });
});