module.exports = function check(str, bracketsConfig) {
  const bracketsMap = new Map(bracketsConfig);
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let topElement = stack[stack.length - 1];
    if (bracketsMap.has(str[i])) {
      // it's an opening bracket
      if (topElement === str[i] && str[i] === bracketsMap.get(str[i])) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      // it's a closing bracket
      if (stack.length === 0) {
        return false;
      }
      // check if the top of the stack is the closing bracket for current symbol
      if (str[i] === bracketsMap.get(topElement)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}