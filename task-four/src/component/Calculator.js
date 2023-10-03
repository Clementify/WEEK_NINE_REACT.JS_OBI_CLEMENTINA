class Calculator {
    // Method for addition
    add(a, b) {
      return a + b;
    }
  
    // Method for subtraction
    subtract(a, b) {
      return a - b;
    }
  
    // Method for multiplication
    multiply(a, b) {
      return a * b;
    }
  
    // Method for division
    divide(a, b) {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    }
  }
  
  // Testing the Calculator class
  const calculator = new Calculator();
  
  // Addition
  const resultAddition = calculator.add(5, 3);
  console.log("5 + 3 =", resultAddition); // Output: 5 + 3 = 8
  
  // Subtraction
  const resultSubtraction = calculator.subtract(10, 4);
  console.log("10 - 4 =", resultSubtraction); // Output: 10 - 4 = 6
  
  // Multiplication
  const resultMultiplication = calculator.multiply(6, 7);
  console.log("6 * 7 =", resultMultiplication); // Output: 6 * 7 = 42
  
  // Division
  const resultDivision = calculator.divide(20, 4);
  console.log("20 / 4 =", resultDivision); // Output: 20 / 4 = 5
  