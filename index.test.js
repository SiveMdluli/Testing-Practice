const {
  stringLength,
  stringLength2,
  reverseString,
  Calculator,
  capitalize,
} = require("./index.js");

/**The describe function in Jest is used to define a test suite,
 * It provides a way to logically group and organize related tests.
 * In this cases itrepresents a collection of tests that are related to
 * the String length function
 */

describe("stringLength", () => {
  it("Return the correct length of a string", () => {
    const expectedLength = 4;
    const result = stringLength("Sive");

    expect(result).toBe(expectedLength);
  });

  it("Return the correct length of a string with spaces", () => {
    const expectedLength = 22;
    const result = stringLength("Sive Mdluli Bhek'swako"); //Including the spaces, as caracters of course.

    expect(result).toBe(expectedLength);
  });

  it("Return 0 for an empty string", () => {
    const expectedLength = 0;

    const result = stringLength("");

    expect(result).toBe(expectedLength);
  });

  it("Return the correct length for a string with special characters", () => {
    const expectedLength = 13;

    const result = stringLength("Hello @world!");

    expect(result).toBe(expectedLength);
  });
  /**Usinga nested describe because this is still undert the same task
   * It's just that I am testing for somethig different, but it's all the sane thing.
   */
  describe("stringLength2", () => {
    it("should return the correct length of a string within limit", () => {
      const expectedLength = 4;
      const result = stringLength2("Sive");

      expect(result).toBe(expectedLength);
    });

    it("should throw an error for an empty string", () => {
      expect(() => {
        stringLength2("");
      }).toThrow("String must be at least 1 character long.");
    });

    it("should throw an error for a string longer than 10 characters", () => {
      expect(() => {
        stringLength2("This is too long");
      }).toThrow("String must not exceed 10 characters.");
    });
  });
});

/**The describe function in this case is used to define a test suite for the 'reverseString' functionality*/
// const reverseString = require("./index.js");

describe("reverseString", () => {
  it("should return the reversed string", () => {
    const input = "Hello, World!";
    const expectedOutput = "!dlroW ,olleH";

    const result = reverseString(input);

    expect(result).toBe(expectedOutput);
  });
});

/**The  'Calculator', Testing*/
describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    it("Correctly add two numbers", () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });

    it("Handle negative numbers", () => {
      const result = calculator.add(-5, 8);
      expect(result).toBe(3);
    });

    it("Handle decimal numbers", () => {
      const result = calculator.add(2.5, 1.5);
      expect(result).toBe(4);
    });
  });

  describe("subtract", () => {
    it("Correctly subtract two numbers", () => {
      const result = calculator.subtract(7, 3);
      expect(result).toBe(4);
    });

    it("Handle negative numbers", () => {
      const result = calculator.subtract(-5, -3);
      expect(result).toBe(-2);
    });

    it("Handle decimal numbers", () => {
      const result = calculator.subtract(5.5, 2.5);
      expect(result).toBe(3);
    });
  });

  describe("divide", () => {
    it("Correctly divide two numbers", () => {
      const result = calculator.divide(10, 2);
      expect(result).toBe(5);
    });

    it("Handle dividing by zero", () => {
      expect(() => {
        calculator.divide(8, 0);
      }).toThrow("Division by zero is not allowed.");
    });

    it("Handle decimal division", () => {
      const result = calculator.divide(5.5, 2);
      expect(result).toBeCloseTo(2.75);
    });
  });

  describe("multiply", () => {
    it("Correctly multiply two numbers", () => {
      const result = calculator.multiply(3, 4);
      expect(result).toBe(12);
    });

    it("Handle negative numbers", () => {
      const result = calculator.multiply(-5, 3);
      expect(result).toBe(-15);
    });

    it("Handle decimal numbers", () => {
      const result = calculator.multiply(2.5, 3);
      expect(result).toBe(7.5);
    });
  });
});

// Writting the tests (first TDD)
describe("capitalize", () => {
  it("Capitalize the first character of a string", () => {
    const input = "hello";
    const expectedOutput = "Hello";

    const result = capitalize(input);

    expect(result).toBe(expectedOutput);
  });
});
