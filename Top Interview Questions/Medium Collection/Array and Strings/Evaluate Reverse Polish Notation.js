const calculator = (num2, num1, operator) => {
  if (operator === '+') return num2 + num1;
  if (operator === '-') return num2 - num1;
  if (operator === '*') return num2 * num1;
  if (operator === '/') return parseInt(num2 / num1);
};

const evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(parseInt(tokens[i]))) {
      const num1 = parseInt(stack.pop());
      const num2 = parseInt(stack.pop());
      stack.push(calculator(num2, num1, tokens[i]));
      continue;
    }
    stack.push(parseInt(tokens[i]));
  }
  return stack.pop();
};
