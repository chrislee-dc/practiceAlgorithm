function executeSolution(SolutionClass, ...args) {
  let solutionInstance = new SolutionClass();
  const methodNames = Object.getOwnPropertyNames(
    Object.getPrototypeOf(solutionInstance)
  ).filter(
    (name) =>
      name !== "constructor" && typeof solutionInstance[name] === "function"
  );

  console.clear();

  const methodName = methodNames[0];
  const result = solutionInstance[methodName](...args);
  console.log("Result => ", result);
  return result;
}

module.exports = { executeSolution };
