function stringLength(string) {
    string = string.length;
    if(string < 1 || string > 10) {
        throw 'string should be more than 1 or less than 10';
    }
    return string;
  }

function reverseString(string) {
    let newString = "";
    for (let i=string.length -1; i >= 0; i--){
        newString += string[i];
    }
    return newString;
}

 class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        return a / b;
    }
}

function capitalize(str) {
    
    const firsLetter = str.charAt(0);
    const capitalize =  firsLetter.toUpperCase() + str.slice(1);
    return capitalize;
}

module.exports = { reverseString, stringLength, Calculator, capitalize }
