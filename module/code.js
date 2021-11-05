module.exports.phoneValid = function phoneValid(number, shift) {
  if (shift == 1) {
    number = number.replace(/\D/g, "");

    let arr = [];
    arr.unshift("(");
    for (let i = 0; i < number.length; i++) {
      number[i] = number[i].toString();
    }
    for (let i = 0; i < number.length; i++) {
      arr.push(number[i]);
      if (i == 2) {
        arr.push(")");
        arr.push(" ");
      }
      if (i == 5) {
        arr.push("-");
      }
    }

    return "\n" + arr.join("");
  }
  if (shift == 2) {
    arr = new Set([...myArray].filter((x) => !toRemove.has(x)));

    return Array.from(difference);
  }
};
