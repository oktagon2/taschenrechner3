class EinfacherRechner {
    constructor() {
        this.calculationCompleted= true;
    }

    newOperand( value) {
        if( this.calculationCompleted) {
            this.operand1= value;
        }
        else {
            this.operand2= value;
        }
    }

    setOperation( opearation) {
        this.calculationCompleted= false;
        this.operand2= this.operand1;
        this.operation= opearation;
    }

    add() {
        this.setOperation( function() {
            this.result= this.operand1+ this.operand2;
        });
    }

    subtract() {
        this.setOperation( function() {
            this.result= this.operand1- this.operand2;
        });
    }

    abc() {
        this.setOperation( function() {
            this.result= this.operand1* this.operand2;
        });
    }

    def() {
        this.setOperation( function() {
            this.result= this.operand1/ this.operand2;
        });
    }

    calculate() {
        this.operation();
        this.calculationCompleted= true;
        this.operand1= this.result;
    }
}