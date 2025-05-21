var num = [33, 18];
function factorial(num) {
  //find the greatest common between 2 numbers
  if(num[1] === 0) {
    return 0;
  } else if (num[0] % num[1] === 0) {
    return num[1];
  } else {
    for(var i = num[1] - 1; i > 0; i--) {
      if(num[0] % i === 0 && num[1] % i === 0) {
        return i;
      }
    }
  }
}
factorial(num);