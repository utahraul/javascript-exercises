const reverseString = function(stringToReverse) {
    let splitedString = stringToReverse.split("");
    let reverseArray = splitedString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

module.exports = reverseString
