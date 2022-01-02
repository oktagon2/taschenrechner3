function testAddDigit( numberComposer, digit, result) {
    numberComposer.numKeyPressed(digit);
    var result1= numberComposer.result.toPrecision(15);
    var result2= result.toPrecision(15);
    expect( result1).toEqual( result2);
}

describe( "NumberComposer", function() {
    it( "should be able to be created", function() {
        var numberComposer= new NumberComposer();
        expect( numberComposer).toBeDefined();
    });

    it( "should be able to compose and limit numbers", function() {
        var numberComposer= new NumberComposer();
        var initialNumber= 15;
        numberComposer.newNumber( initialNumber);
        expect( numberComposer.result).toEqual( initialNumber);

        testAddDigit( numberComposer, 1, 1);
        testAddDigit( numberComposer, 2, 12);
        testAddDigit( numberComposer, 3, 123);
        testAddDigit( numberComposer, 4, 1234);
        testAddDigit( numberComposer, 5, 12345);
        testAddDigit( numberComposer, 6, 123456);
        testAddDigit( numberComposer, 7, 1234567);
        testAddDigit( numberComposer, 8, 12345678);
        testAddDigit( numberComposer, 9, 123456789);
        testAddDigit( numberComposer, 0, 1234567890);
        testAddDigit( numberComposer, 1, 12345678901);
        testAddDigit( numberComposer, 2, 123456789012);
        testAddDigit( numberComposer, 3, 123456789012);
        testAddDigit( numberComposer, 4, 123456789012);
        testAddDigit( numberComposer, 5, 123456789012);

        var initialNumber= 123123;
        numberComposer.newNumber( initialNumber);
        expect( numberComposer.result).toEqual( initialNumber);

        testAddDigit( numberComposer, 1, 1);
        testAddDigit( numberComposer, 2, 12);
        testAddDigit( numberComposer, 3, 123);
        testAddDigit( numberComposer, 4, 1234);
        testAddDigit( numberComposer, 5, 12345);
        testAddDigit( numberComposer, 6, 123456);
        numberComposer.keyPeriodPressed();
        testAddDigit( numberComposer, 7, 123456.7);
        testAddDigit( numberComposer, 8, 123456.78);
        testAddDigit( numberComposer, 9, 123456.789);
        testAddDigit( numberComposer, 0, 123456.7890);
        testAddDigit( numberComposer, 1, 123456.78901);
        testAddDigit( numberComposer, 2, 123456.789012);
        testAddDigit( numberComposer, 3, 123456.789012);
        testAddDigit( numberComposer, 4, 123456.789012);
        testAddDigit( numberComposer, 5, 123456.789012);
    });


    it( "should be able to clear the actual result", function() {
        var numberComposer= new NumberComposer();
        var initialNumber= 15;
        numberComposer.newNumber( initialNumber);
        expect( numberComposer.result).toEqual( initialNumber);
        numberComposer.keyCPressed();
        expect( numberComposer.result).toEqual( initialNumber);
        testAddDigit( numberComposer, 1, 1);
        testAddDigit( numberComposer, 2, 12);
        testAddDigit( numberComposer, 3, 123);
        numberComposer.keyCPressed();
        expect( numberComposer.result).toEqual( 0);
        testAddDigit( numberComposer, 1, 1);
        testAddDigit( numberComposer, 2, 12);
        testAddDigit( numberComposer, 3, 123);
    });
});