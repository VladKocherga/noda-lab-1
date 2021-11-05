module.exports.phoneValid = function phoneValid(number, shift) {
  if (shift == 1) {
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

  //   let output = "";
  //   for (let i = 0; i < str.length; i++) {
  //     let c = str[i];
  //     if (c.match(/[a-z]/i)) {
  //       const code = str.charCodeAt(i);
  //       if (code >= 65 && code <= 90) {
  //         c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
  //       } else if (code >= 97 && code <= 122) {
  //         c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
  //       }
  //     }
  //     output += c;
  //   }
  //   return `${output}`;
};
