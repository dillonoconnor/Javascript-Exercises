const fibonacci = function (index) {
  let sequence = [1, 1, 2, 3];
  if (index < 0) {
    return "OOPS";
  } else {
    for (let i = 0; i < index; i++) {
      sequence.push(
        sequence[sequence.length - 1] + sequence[sequence.length - 2]
      );
    }
    return sequence[index - 1];
  }
};

module.exports = fibonacci;
