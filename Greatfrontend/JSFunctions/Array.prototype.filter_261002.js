Array.prototype.myFilter = function (callbackFn, thisArg) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) {
      continue;
    }

    const value = this[i];

    if (callbackFn.call(thisArg, value, i, this)) {
      result.push(value);
    }
  }

  return result;
};
