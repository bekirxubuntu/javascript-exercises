const removeFromArray = function() {
    for (let i = 1; i <= arguments.length - 1; i++) {
        arguments[0] = arguments[0].filter(item => item !== arguments[i]);
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
