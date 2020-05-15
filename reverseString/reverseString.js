<script>
let revStr;
const reverseString = function(myString) {
    let arrayStr = myString.split('');

    let arrLength = arrayStr.length;
    while (arrayStr.length > 0) {
        revStr += arrayStr.pop();
    }
    revStr.split('');
    let newStr = revStr.join('');
    return newStr;
}
</script>


module.exports = reverseString
