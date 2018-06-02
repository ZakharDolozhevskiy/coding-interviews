// Evaluate Reverse Polish Notation
//
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, /. Each operand may be an integer or another expression.
//
// Note:
// Division between two integers should truncate toward zero.
// The given RPN expression is always valid. That means the expression would always evaluate to a
// result and there won't be any divide by zero operation.

const evalRPN = tokens => {
  if (!tokens.length) return 0;

  const operations = {
    '+': (a, b) => b + a,
    '-': (a, b) => b - a,
    '/': (a, b) => b / a ^ 0,
    '*': (a, b) => b * a
  };

  const stack = [];

  tokens.forEach(t => operations[t]
    ? stack.push(operations[t](stack.pop(), stack.pop()))
    : stack.push(Number(t)));

  return stack.pop();
};
