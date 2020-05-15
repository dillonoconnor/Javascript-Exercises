let removeFromArray = function(array, ...args) {
    //populate array with all args
    let  splicearr = [];
    for (i=0;i<args.length;i++) {
        splicearr.push(args[i]);
    }
    //for each element in array of args, while the index exists for element, splice it
    let n = 0;
    let index;
    while (n<splicearr.length) {
        index = array.indexOf(splicearr[n])
        if (index == -1) {
            n++;
            continue;
        }
        else if (index > -1) {
            array.splice(index,1)
        }
        n++;
    }
    return array;
}

module.exports = removeFromArray
