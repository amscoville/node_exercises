/*
EXERCISE 35:

        Write a test suite and specs to test a function called "isEuroFormat()" 
        "isEuroFormat" takes a string parameter called "serial" and returns whether that string is a correctly-formatted Euro serial number

        Valid serial numbers are comprised of 12 characters: one capital letter followed by 11 digits

        For example:

        isEuroFormat("X04135981862") should return true
        isEuroFormat("x04135981862") should return false //letter not capitalized
        isEuroFormat("504135981862") should return false //doesn't start with letter
        isEuroFormat("X041359818626") should return false //too many numbers
        isEuroFormat("X0413598186") should return false //not enough numbers
        isEuroFormat("XX4135981862") should return false //too many letters     
*/

describe('isEuroFormat', function() {
    it('should be comprised of 12 characters', function(){
        expect(isEuroFormat('X04135981862')).toBe(true); //has 12 characters
        expect(isEuroFormat('X0413598186')).toBe(false); //too few characters
        expect(isEuroFormat('X041359818626')).toBe(false); //too many characters
    });
    it('should begin with a letter', function() {
        expect(isEuroFormat('X04135981862')).toBe(true); //begins with a letter
        expect(isEuroFormat('504135981862')).toBe(false); //does not begin with a letter
    });
    it('should have only one letter', function() {
        expect(isEuroFormat('X04135981862')).toBe(true); //has one letter
        expect(isEuroFormat('XX4135981862')).toBe(false); //has more than one letter
    });
    it('should begin with one capital letter', function() {
        expect(isEuroFormat('X04135981862')).toBe(true); //begins with capital letter
        expect(isEuroFormat('x04135981862')).toBe(false); //letter not capitalized
    });
    it('should have 11 numbers', function() {
        expect(isEuroFormat('X04135981862')).toBe(true); //has 11 numbers
        expect(isEuroFormat('X041359818626')).toBe(false); //too many numbers
        expect(isEuroFormat('X0413598186')).toBe(false); //too few numbers

    });
});