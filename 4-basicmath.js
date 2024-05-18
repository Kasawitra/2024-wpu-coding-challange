function basicOp(operator, value1, value2) {
  if (operator === "+") {
    return value1 + value2;
  } else if (operator === "-") {
    return value1 - value2;
  } else if (operator === "*") {
    return value1 * value2;
  } else if (operator === "/") {
    return value1 / value2;
  } else {
    throw new Error("Unsuported operator");
  }
}

{
  {
    console.log(basicOp("/", 2, 4));
  }
}
