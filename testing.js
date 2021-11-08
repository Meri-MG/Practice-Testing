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

module.exports = { reverseString, stringLength }
