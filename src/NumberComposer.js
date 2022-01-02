class NumberComposer {
    newNumber( initialNumber) {
        this.result= initialNumber;
        this.beginCompose= true;
        this.composeDecimalPlaces= false;
        this.decimalPlaceDivisor= 10;
        this.compositionLength= 0;
    }

    numKeyPressed( value) {
        if( this.compositionLength< 12)
        {
            if( this.beginCompose) {
                this.result= value;
                this.beginCompose= false;
                this.composeDecimalPlaces= false;
            }
            else {
                if( this.composeDecimalPlaces) {
                    this.result= this.result+ value/ this.decimalPlaceDivisor;
                    this.decimalPlaceDivisor*= 10;
                }
                else {
                    this.result= this.result* 10+ value;
                }
            }
            this.compositionLength+= 1;
        }
    }

    keyPeriodPressed() {
        this.composeDecimalPlaces= true;
        if( this.beginCompose) {
            this.result= 0;
            this.beginCompose= false;
        }
    }

    keyCPressed() {
        if( !this.beginCompose)
        {
            this.newNumber( 0);
        }
    }
}