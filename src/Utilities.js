var utilities= {
    displayValueAsString: function(value) {
        var ret= value.toPrecision(12);
        if( ret.indexOf( ".") > -1) {
            while( ret.slice( -1)=== "0") {
                ret= ret.substring( 0, ret.length- 1);
            }
            if( ret.slice( -1)=== ".") {
                ret= ret.substring( 0, ret.length- 1);
            }
        }
        return ret;
    }
}