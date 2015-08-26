function dataTypes (x) { 
    if ( x === null) {
        return "This is null";
    }
    else if ( x === undefined) {
        return "This is undefined";
    }
    else if ( typeof x === "object") {
        return "This is object";
    }
    else if ( typeof x === "string") {
            return "This is string";
    }
     else if (x === true || x === false ) {
        return "This is a boolean";
    }
    else if (x % 1 === 0)  {
        return "This is an interger";
    }
    else if (x % 1 !== 0){
        return "This is a float";
    }
    else {
        return "Not recognised";
    }
}
dataTypes(true);