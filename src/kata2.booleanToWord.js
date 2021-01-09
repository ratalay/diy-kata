const booleanToWord = boolean => {
    let result = ''
    if(boolean === true) {
result = 'Yes'
    } else {
        result = 'No';
    }
    return result
};

module.exports = booleanToWord;
