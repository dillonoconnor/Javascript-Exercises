const repeatString = function(string, reps) {
    let fullString = '';
    if (reps < 0) {
        return 'ERROR';
    }
    else {
        for  (i=0; i<reps; i++) {
            fullString+=string;
        }
    return fullString;
    }
}
module.exports = repeatString
