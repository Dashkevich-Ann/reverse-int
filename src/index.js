module.exports = function reverse (n) {
  let numToString = n.toString();
  if (numToString[0] != '-') {
    let reversed = numToString.split('').reverse();
    return +reversed.join('');
  } else {
    let arr = numToString.split('');
    let minus = arr.shift();
    let reversed = arr.reverse();
    return +reversed.join('');
  };
}
