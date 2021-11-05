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
    let arr = [];
    const myArray = number
      .split(".")
      .splice(0, 1)
      .join("")
      .replace(/\D/g, "")
      .split("");
    for (let i = 0; i < myArray.length; i++) {
      myArray[i] = Number(myArray[i]);
    }

    let toRemove = number
      .split(".")
      .splice(1, 1)
      .join("")
      .replace(/\D/g, "")
      .split("");
    for (let i = 0; i < toRemove.length; i++) {
      toRemove[i] = Number(toRemove[i]);
    }
    console.log(toRemove);
    let difference = myArray.filter((u) => !toRemove.includes(u));
    arr.push(difference);
    return arr.join("");
  }
};
