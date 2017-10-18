/*
EXERCISE 36:

        Write a test suite and specs to test a function called "isValidCardFormat"
        "isValidCardFormat" takes a parameter called "number" and returns whether it is a correctly-formatted credit card number

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

describe('isValidCardFormat', function() {
    it('should contain only numbers', function() {
        expect(isValidCardFormat('30459377699824')).toBe(true); //contains only numbers
        expect(isValidCardFormat('3x459377699824')).toBe(false); //contains a letter
        expect(isValidCardFormat('3;459377699824')).toBe(false); //contains punctuation
    });
    it('should have a vaild prefix', function(){
        expect(isValidCardFormat('4175937769982463')).toBe(true); //begins with 4
        expect(isValidCardFormat('7175937769982463')).toBe(false); //does not begin with 4
        expect(isValidCardFormat('347593776998293')).toBe(true); //begins with 34
        expect(isValidCardFormat('377593776998246')).toBe(true); //begins with 37
        expect(isValidCardFormat('257593776998298')).toBe(false); //does not begin with 34 or 37
        expect(isValidCardFormat('5175937769982438')).toBe(true); //begins with 51
        expect(isValidCardFormat('5275937769982438')).toBe(true); //begins with 52
        expect(isValidCardFormat('5375937769982438')).toBe(true); //begins with 53
        expect(isValidCardFormat('5475937769982438')).toBe(true); //begins with 54
        expect(isValidCardFormat('5575937769982438')).toBe(true); //begins with 55
        expect(isValidCardFormat('2275937769982438')).toBe(false); //does not begin with 51-55
        expect(isValidCardFormat('6011937769982437')).toBe(true); //begins with 6011
        expect(isValidCardFormat('2211937769982437')).toBe(false); //does not begin with 6011
        expect(isValidCardFormat('36759377699824')).toBe(true); //begins with 36
        expect(isValidCardFormat('38759377699824')).toBe(true); //begins with 38
        expect(isValidCardFormat('30059377699824')).toBe(true); //begins with 300
        expect(isValidCardFormat('30159377699824')).toBe(true); //begins with 301
        expect(isValidCardFormat('30259377699824')).toBe(true); //begins with 302
        expect(isValidCardFormat('30359377699824')).toBe(true); //begins with 303
        expect(isValidCardFormat('30459377699824')).toBe(true); //begins with 304
        expect(isValidCardFormat('30559377699824')).toBe(true); //begins with 305
        expect(isValidCardFormat('28759377699824')).toBe(false); //does not begin with 300-305, 36, or 38
    });
    describe('visa', function(){
        it('should be 13 or 16 numbers long', function(){
            expect(isValidCardFormat('4175937769982463')).toBe(true); //16 numbers long
            expect(isValidCardFormat('4175937769982')).toBe(true); //13 numbers long
            expect(isValidCardFormat('41759377699824')).toBe(false); //not 13 or 16 numbers long
        });
    });
    describe('american express', function(){
        it('should be 15 numbers long', function(){
            expect(isValidCardFormat('347593776998295')).toBe(true); //15 numbers long
            expect(isValidCardFormat('37759377699824')).toBe(false); //too short
            expect(isValidCardFormat('3775937769982436')).toBe(false); //too long 
        });
    });
    describe('mastercard', function(){
        it('should be 16 numbers long', function(){
            expect(isValidCardFormat('5575937769982438')).toBe(true); //16 characters long
            expect(isValidCardFormat('557593776998243')).toBe(false); //too short
            expect(isValidCardFormat('55759377699824385')).toBe(false); //too long
        });
    });
    describe('discover', function(){
        it('should be 16 numbers long', function(){
            expect(isValidCardFormat('6011937769982438')).toBe(true); //16 characters long
            expect(isValidCardFormat('601193776998243')).toBe(false); //too short
            expect(isValidCardFormat('60119377699824385')).toBe(false); //too long
        });     
    });
    describe('diners club', function(){
        it('should be 14 numbers long', function(){
            expect(isValidCardFormat('30559377699824')).toBe(true); //14 numbers long
            expect(isValidCardFormat('3055937769982')).toBe(false); //too short
            expect(isValidCardFormat('305593776998247')).toBe(false); //too long
        });
    });
});

    