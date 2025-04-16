function callSolutionMethod(SolutionClass, ...args) {
  let solutionInstance = new SolutionClass();
  const methodNames = Object.getOwnPropertyNames(
    Object.getPrototypeOf(solutionInstance)
  ).filter(
    (name) =>
      name !== "constructor" && typeof solutionInstance[name] === "function"
  );

  if (methodNames.length !== 1) {
    throw new Error(
      `Expected exactly one method in Solution class, found: ${methodNames.join(
        ", "
      )}`
    );
  }

  const methodName = methodNames[0];
  const result = solutionInstance[methodName](...args);
  console.log("method result => ", result);
  return result;
}

module.exports = { callSolutionMethod };
