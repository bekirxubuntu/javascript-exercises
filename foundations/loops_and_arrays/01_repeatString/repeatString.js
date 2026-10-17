const repeatString = function(string, num) {
    if (num<0) {
        return "ERROR";
    }
    else {
        let repeatedText = "";
        for (let i=0; i<num; i++){
            repeatedText += string;
        }
        return repeatedText;
    }
};

// Do not edit below this line
module.exports = repeatString;
