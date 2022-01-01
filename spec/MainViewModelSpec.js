function testNumKeyPressed( mainViewModel, result, numKeyPressedFunction, newNumber, numKeyValue) {
    mainViewModel.numberComposer.result= result;
    numKeyPressedFunction();
    if( newNumber!= undefined) {
        expect( mainViewModel.numberComposer.newNumber).toHaveBeenCalledWith( newNumber);
    }
    expect( mainViewModel.numberComposer.numKeyPressed).toHaveBeenCalledWith( numKeyValue);
    expect( mainViewModel.displayValue).toEqual(result);
}

function testNumKeyPressed2( mainViewModel, result, numKeyPressedFunction) {
    numKeyPressedFunction();
    expect( mainViewModel.displayValue).toEqual(result);
}

describe( "MainViewModel", function() {
    it( "should be able to be created", function() {
        var mainViewModel= new MainViewModel();
        expect( mainViewModel).toBeDefined();
    });

    // Dieser Test müsste im Bezug auf das Verhalten der Spies im Einklang mit den anderen Tests sein.
    // d.h. das Verhalten der Spies, dass ich hier "selber" programmiert habe, muss mit dem in den Specs für die Spies übereinstimmen
    // muss ich überhaupt das Verhalten von Spies "selber" programmieren, wenn die echten Klassen ja schon funktionieren???
    // Man könnte hier anstatt Spy Objs echte Objs verwenden und nur die Methoen Spyen, aber den Call dann trotzdem druchlassen.
    it( "should be able to calculate with spies", function() {
        var einfacherRechner= jasmine.createSpyObj( "einfacherRechner", {
            newOperand: undefined, 
            add: undefined, 
            subtract: undefined, 
            multiply: undefined,
            divide: undefined,
            calculate: undefined
        });

        var numberComposer= jasmine.createSpyObj( "numberComposer", {
            newNumber: undefined,
            numKeyPressed: undefined,
            keyPeriodPressed: undefined
        });

        var mainViewModel= new MainViewModel();
        mainViewModel.einfacherRechner= einfacherRechner;
        mainViewModel.numberComposer= numberComposer;

        expect( mainViewModel.displayValue).toEqual(0);
        testNumKeyPressed( mainViewModel, 1, () => { mainViewModel.key1Pressed(); }, 0, 1);
        testNumKeyPressed( mainViewModel, 12, () => { mainViewModel.key2Pressed(); }, undefined, 2);
    
        mainViewModel.keyPeriodPressed();
        expect( numberComposer.keyPeriodPressed).toHaveBeenCalled();
        expect( mainViewModel.displayValue).toEqual(12);
        
        testNumKeyPressed( mainViewModel, 12.3, () => { mainViewModel.key3Pressed(); }, undefined, 3);
        testNumKeyPressed( mainViewModel, 12.34, () => { mainViewModel.key4Pressed(); }, undefined, 4);
        
        einfacherRechner.result= 12.34;
        mainViewModel.keyAddPressed();
        expect( mainViewModel.einfacherRechner.newOperand).toHaveBeenCalledWith( 12.34);
        expect( mainViewModel.einfacherRechner.add).toHaveBeenCalled();
        expect( mainViewModel.displayValue).toEqual(12.34);
        
        testNumKeyPressed( mainViewModel, 5, () => { mainViewModel.key5Pressed(); }, 12.34, 5);
        testNumKeyPressed( mainViewModel, 56, () => { mainViewModel.key6Pressed(); }, undefined, 6);
    
        mainViewModel.keyPeriodPressed();
        expect( numberComposer.keyPeriodPressed).toHaveBeenCalled();
        expect( mainViewModel.displayValue).toEqual(56);
        
        testNumKeyPressed( mainViewModel, 56.7, () => { mainViewModel.key7Pressed(); }, undefined, 7);
        testNumKeyPressed( mainViewModel, 56.78, () => { mainViewModel.key8Pressed(); }, undefined, 8);
        
        einfacherRechner.result= 69.12
        mainViewModel.keyCalculatePressed();

        expect( mainViewModel.displayValue).toEqual(69.12);
        expect( mainViewModel.einfacherRechner.newOperand).toHaveBeenCalledWith( 56.78);
        expect( mainViewModel.einfacherRechner.calculate).toHaveBeenCalled();
        expect( mainViewModel.displayValue).toEqual(69.12);

        einfacherRechner.result= 125.9
        mainViewModel.keyCalculatePressed();

        expect( mainViewModel.displayValue).toEqual(125.9);
        expect( mainViewModel.einfacherRechner.calculate).toHaveBeenCalled();
        expect( mainViewModel.displayValue).toEqual(125.9);
    });

    it( "should be able to calculate with real objects", function() {
        var einfacherRechner= new EinfacherRechner();
        var numberComposer= new NumberComposer();

        var mainViewModel= new MainViewModel();
        mainViewModel.einfacherRechner= einfacherRechner;
        mainViewModel.numberComposer= numberComposer;

        expect( mainViewModel.displayValue).toEqual(0);
        testNumKeyPressed2( mainViewModel, 1, () => { mainViewModel.key1Pressed(); });
        testNumKeyPressed2( mainViewModel, 12, () => { mainViewModel.key2Pressed(); });
    
        mainViewModel.keyPeriodPressed();
        expect( mainViewModel.displayValue).toEqual(12);
        
        testNumKeyPressed2( mainViewModel, 12.3, () => { mainViewModel.key3Pressed(); });
        testNumKeyPressed2( mainViewModel, 12.34, () => { mainViewModel.key4Pressed(); });
        
        mainViewModel.keyAddPressed();
        expect( mainViewModel.displayValue).toEqual(12.34);
        
        testNumKeyPressed2( mainViewModel, 5, () => { mainViewModel.key5Pressed(); });
        testNumKeyPressed2( mainViewModel, 56, () => { mainViewModel.key6Pressed(); });
    
        mainViewModel.keyPeriodPressed();
        expect( mainViewModel.displayValue).toEqual(56);
        
        testNumKeyPressed2( mainViewModel, 56.7, () => { mainViewModel.key7Pressed(); });
        testNumKeyPressed2( mainViewModel, 56.78, () => { mainViewModel.key8Pressed(); });
        
        mainViewModel.keyCalculatePressed();
        expect( mainViewModel.displayValue).toEqual(69.12);

        mainViewModel.keyCalculatePressed();
        expect( mainViewModel.displayValue).toEqual(125.9);
    });
});