const stringLength = (str) => {
  let strLength = 0;
  for (let i = 0; i < str.length; i++) {
    strLength = strLength + 1;
  }
  return strLength;
};

const stringLength2 = (str) => {
  if (str.length === 0) {
    throw new Error("String must be at least 1 character long.");
  }

  if (str.length > 10) {
    throw new Error("String must not exceed 10 characters.");
  }

  let strLength = 0; //it's a local varible, so it's COOL
  for (let i = 0; i < str.length; i++) {
    strLength = strLength + 1;
  }
  return strLength;
};

// const stringLength2 = (str) => {
//   switch (true) {
//     case str.length === 0:
//       throw new Error("String must be at least 1 character long.");
//     case str.length > 10:
//       throw new Error("String must not exceed 10 characters.");
//     default:
//       let strLength = 0;
//       for (let i = 0; i < str.length; i++) {
//         strLength = strLength + 1;
//       }
//       return strLength;
//   }
// };

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

// Simple Calculator
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  stringLength,
  stringLength2,
  reverseString,
  Calculator,
  capitalize,
};
