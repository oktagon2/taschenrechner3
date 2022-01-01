class EinfacherRechner {
    constructor() {
        this.calculationCompleted= true;
        this.operation= undefined;  // offene Operation, die bei nächstem Operator ausgeführt werden muss
        this.lastOperation= undefined;  // letzte Operation, die beim nächsten = ausgeführt werden muss
    }

    newOperand( value) {
        if( this.calculationCompleted) {
            this.operand1= value;
        }
        else {
            this.operand2= value;
        }
    }

    setOperation( operation) {
        this.calculationCompleted= false;
        this.operand2= this.operand1;
        this.operation= operation;
    }

    executeOperation( tryLast= false) {
        if( this.operation) {
            this.operation();
            this.operand1= this.result;
            this.lastOperation= this.operation;
            this.operation= undefined;
        }
        else {
            if( this.lastOperation&& tryLast) {
                this.lastOperation();
                this.operand1= this.result;
            }
            else {
                this.result= this.operand1;
            }
        }
    }

    add() {
        this.executeOperation();
        this.setOperation( function() {
            this.result= this.operand1+ this.operand2;
        });
    }

    substract() {
        this.executeOperation();
        this.setOperation( function() {
            this.result= this.operand1- this.operand2;
        });
    }

    multiply() {
        this.executeOperation();
        this.setOperation( function() {
            this.result= this.operand1* this.operand2;
        });
    }

    divide() {
        this.executeOperation();
        this.setOperation( function() {
            this.result= this.operand1/ this.operand2;
        });
    }

    // Equal Key...
    calculate() {
        this.executeOperation( true);
        this.calculationCompleted= true;
    }
}