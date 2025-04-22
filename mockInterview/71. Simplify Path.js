/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let splitString = path.split("/");
  let result = [];

  for (let i = 0; i < splitString.length; i++) {
    let curr = splitString[i];
    if (curr == "..") {
      result.pop();
    } else if (curr != "." && curr != "") {
      result.push(curr);
    }
  }

  return "/" + result.join("/");
};
