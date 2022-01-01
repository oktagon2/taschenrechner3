class MainViewModel {
    constructor() {
        this.displayValue= 0;
        this.composeNewNumber= true;
        this.newOperandAvailable= false;
    }

    set displayValue( value) {
        this._displayValue= value;
        if( this.mainView) {
            this.mainView.display.innerText= this._displayValue.toString();
        }
    }

    get displayValue() {
        return this._displayValue;
    }


    numKeyPressed( value) {
        if( this.composeNewNumber) {
            this.composeNewNumber= false;
            this.numberComposer.newNumber( this.displayValue);
        }
        this.numberComposer.numKeyPressed( value);
        this.displayValue= this.numberComposer.result;
        this.newOperandAvailable= true;
    }

    key0Pressed() {
        this.numKeyPressed( 0);
    }

    key1Pressed() {
        this.numKeyPressed( 1);
    }

    key2Pressed() {
        this.numKeyPressed( 2);
    }

    key3Pressed() {
        this.numKeyPressed( 3);
    }

    key4Pressed() {
        this.numKeyPressed( 4);
    }

    key5Pressed() {
        this.numKeyPressed( 5);
    }

    key6Pressed() {
        this.numKeyPressed( 6);
    }

    key7Pressed() {
        this.numKeyPressed( 7);
    }

    key8Pressed() {
        this.numKeyPressed( 8);
    }

    key9Pressed() {
        this.numKeyPressed( 9);
    }

    keyPeriodPressed() {
        if( this.composeNewNumber) {
            this.composeNewNumber= false;
            this.numberComposer.newNumber( 0);
        }
        this.numberComposer.keyPeriodPressed();
        this.displayValue= this.numberComposer.result;
    }

    keyOperatorPressed( einfacherRechnerOperation) {
        if( this.newOperandAvailable) {
            this.einfacherRechner.newOperand( this.displayValue);
        }
        einfacherRechnerOperation();
        this.displayValue= this.einfacherRechner.result;
        this.composeNewNumber= true;
        this.newOperandAvailable= false;

    }

    keyAddPressed() {
        this.keyOperatorPressed( () => { this.einfacherRechner.add(); });
    }

    keySubtractPressed() {
        this.keyOperatorPressed( () => { this.einfacherRechner.subtract(); });
    }

    keyMultiplyPressed() {
        this.keyOperatorPressed( () => { this.einfacherRechner.multiply(); });
    }

    keyDividePressed() {
        this.keyOperatorPressed( () => { this.einfacherRechner.divide(); });
    }

    keyCalculatePressed() {
        if( this.newOperandAvailable) {
            this.einfacherRechner.newOperand( this.displayValue);
        }
        this.einfacherRechner.calculate();
        this.displayValue= this.einfacherRechner.result;
        this.composeNewNumber= true;
        this.newOperandAvailable= false;
    }

    keyCPressed() {
        if( !this.composeNewNumber)
        {
            this.numberComposer.keyCPressed();
            this.displayValue= this.numberComposer.result;
        }
    }

    keySqrPressed() {
        this.numberComposer.newNumber( Math.pow( this.displayValue, 2));
        this.displayValue= this.numberComposer.result;
        this.newOperandAvailable= true;
    }

    keySqrtPressed() {
        this.numberComposer.newNumber( Math.pow( this.displayValue, 0.5));
        this.displayValue= this.numberComposer.result;
        this.newOperandAvailable= true;
    }
}

