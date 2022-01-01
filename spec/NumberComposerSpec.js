describe( "NumberComposer", function() {
    it( "should be able to be created", function() {
        var numberComposer= new NumberComposer();
        expect( numberComposer).toBeDefined();
    });

    it( "should be able to compose numbers", function() {
        var numberComposer= new NumberComposer();
        var initialNumber= 15;
        numberComposer.newNumber( initialNumber);
        expect( numberComposer.result).toEqual( initialNumber);
        numberComposer.numKeyPressed(1);
        expect( numberComposer.result).toEqual( 1);
        numberComposer.numKeyPressed(2);
        expect( numberComposer.result).toEqual( 12);
        numberComposer.numKeyPressed(3);
        expect( numberComposer.result).toEqual( 123);
        numberComposer.numKeyPressed(4);
        expect( numberComposer.result).toEqual( 1234);
        numberComposer.numKeyPressed(5);
        expect( numberComposer.result).toEqual( 12345);
        numberComposer.numKeyPressed(6);
        expect( numberComposer.result).toEqual( 123456);

        numberComposer.newNumber( initialNumber);
        expect( numberComposer.result).toEqual( initialNumber);
        numberComposer.numKeyPressed(1);
        expect( numberComposer.result).toEqual( 1);
        numberComposer.numKeyPressed(2);
        expect( numberComposer.result).toEqual( 12);
        numberComposer.numKeyPressed(3);
        expect( numberComposer.result).toEqual( 123);
        numberComposer.keyPeriodPressed();
        numberComposer.numKeyPressed(7);
        expect( numberComposer.result).toEqual( 123.7);
        numberComposer.numKeyPressed(8);
        expect( numberComposer.result).toEqual( 123.78);
        numberComposer.numKeyPressed(9);
        expect( numberComposer.result).toEqual( 123.789);
    });

    it( "should be able to limit compositions", function() {
        var numberComposer= new NumberComposer();
        var initialNumber= 15;
        numberComposer.newNumber( initialNumber);
        expect( numberComposer.result).toEqual( initialNumber);
        numberComposer.numKeyPressed(1);
        expect( numberComposer.result).toEqual( 1);
        numberComposer.numKeyPressed(2);
        expect( numberComposer.result).toEqual( 12);
        numberComposer.numKeyPressed(3);
        expect( numberComposer.result).toEqual( 123);
        numberComposer.numKeyPressed(4);
        expect( numberComposer.result).toEqual( 1234);
        numberComposer.numKeyPressed(5);
        expect( numberComposer.result).toEqual( 12345);
        numberComposer.numKeyPressed(6);
        expect( numberComposer.result).toEqual( 123456);
        numberComposer.numKeyPressed(7);
        expect( numberComposer.result).toEqual( 123456);
        numberComposer.numKeyPressed(8);
        expect( numberComposer.result).toEqual( 123456);

        numberComposer.newNumber( initialNumber);
        expect( numberComposer.result).toEqual( initialNumber);
        numberComposer.numKeyPressed(1);
        expect( numberComposer.result).toEqual( 1);
        numberComposer.numKeyPressed(2);
        expect( numberComposer.result).toEqual( 12);
        numberComposer.numKeyPressed(3);
        expect( numberComposer.result).toEqual( 123);
        numberComposer.keyPeriodPressed();
        numberComposer.numKeyPressed(7);
        expect( numberComposer.result).toEqual( 123.7);
        numberComposer.numKeyPressed(8);
        expect( numberComposer.result).toEqual( 123.78);
        numberComposer.numKeyPressed(9);
        expect( numberComposer.result).toEqual( 123.789);
        numberComposer.numKeyPressed(9);
        expect( numberComposer.result).toEqual( 123.789);
        numberComposer.numKeyPressed(9);
        expect( numberComposer.result).toEqual( 123.789);
        numberComposer.numKeyPressed(9);
        expect( numberComposer.result).toEqual( 123.789);
    });
});