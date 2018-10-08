const repeatString = function(stringToRepeat, numberOfTimes) {
    let finalString = '';
    if(numberOfTimes >= 0){
        for (i=1; i<=numberOfTimes; i++){
            finalString = finalString + stringToRepeat;
        };
        return finalString;
    } else {
        return('ERROR');
    };
};

module.exports = repeatString
