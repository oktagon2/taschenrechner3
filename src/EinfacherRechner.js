class EinfacherRechner {
    constructor() {
        this.calculationCompleted= true;
        this.operation= undefined;  // offene Operation, die bei nächstem Operator ausgeführt werden muss
        this.lastOperation= undefined;  // letzte Operation, die beim nächsten = ausgeführt werden muss
        this.realOperand2= false;
    }

    newOperand( value) {
        if( this.calculationCompleted) {
            this.operand1= value;
        }
        else {
            this.operand2= value;
            this.realOperand2= true;
        }
    }

    setOperation( operation) {
        this.calculationCompleted= false;
        this.operand2= this.operand1;
        this.operation= operation;
        this.realOperand2= false;
    }

    executeOperation() {
        if( this.operation && this.realOperand2) {
            this.operation();
            this.operand1= this.result;
            this.lastOperation= this.operation;
            this.operation= undefined;
        }
        else {
            this.result= this.operand1;
        }
    }

    add() {
        this.executeOperation();
        this.setOperation( function() {
            this.result= this.operand1+ this.operand2;
        });
    }

    subtract() {
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
        //this.executeOperation( true);
        if( this.operation) {
            this.operation();
            this.operand1= this.result;
            this.lastOperation= this.operation;
            this.operation= undefined;
        }
        else {
            if( this.lastOperation) {
                this.lastOperation();
                this.operand1= this.result;
            }
            else {
                this.result= this.operand1;
            }
        }
       
        this.calculationCompleted= true;
    }
}