describe( "EinfacherRechner", function() {
    it("should be able to be created", function() {
        var einfacherRechner= new EinfacherRechner();
        expect( einfacherRechner).toBeDefined();
    });

    it("should be able to add to numbers continually", function() {
        var einfacherRechner= new EinfacherRechner();
        einfacherRechner.newOperand( 1);
        einfacherRechner.add();
        einfacherRechner.newOperand( 2);
        einfacherRechner.calculate();
        expect( einfacherRechner.result).toEqual( 3);
        einfacherRechner.calculate();
        expect( einfacherRechner.result).toEqual( 5);
        einfacherRechner.calculate();
        expect( einfacherRechner.result).toEqual( 7);
        einfacherRechner.calculate();
        expect( einfacherRechner.result).toEqual( 9);
        einfacherRechner.newOperand( 5);
        einfacherRechner.add();
        einfacherRechner.newOperand( 8);
        einfacherRechner.calculate();
        expect( einfacherRechner.result).toEqual( 13);
    });

    it("should be able to subtract numbers", function() {
        var einfacherRechner= new EinfacherRechner();
        einfacherRechner.newOperand( 10);
        einfacherRechner.subtract();
        einfacherRechner.newOperand( 2);
        einfacherRechner.calculate();
        expect( einfacherRechner.result).toEqual( 8);
        einfacherRechner.newOperand( 20);
        einfacherRechner.subtract();
        einfacherRechner.newOperand( 9);
        einfacherRechner.calculate();
        expect( einfacherRechner.result).toEqual( 11);

    });

    it("should be able to multiply and divide numbers", function() {
        var einfacherRechner= new EinfacherRechner();
        einfacherRechner.newOperand( 5);
        einfacherRechner.multiply();
        einfacherRechner.newOperand( 3);
        einfacherRechner.calculate();
        expect( einfacherRechner.result).toEqual( 15);
        einfacherRechner.newOperand( 21);
        einfacherRechner.divide();
        einfacherRechner.newOperand( 7);
        einfacherRechner.calculate();
        expect( einfacherRechner.result).toEqual( 3);

    });

    it("should be able to show Zwischenresultate", function() {
        var einfacherRechner= new EinfacherRechner();
        einfacherRechner.newOperand( 1);
        einfacherRechner.add();
        einfacherRechner.newOperand( 2);
        einfacherRechner.add();
        expect( einfacherRechner.result).toEqual( 3);
        einfacherRechner.newOperand( 3);
        einfacherRechner.calculate();
        expect( einfacherRechner.result).toEqual( 6);
    });
});