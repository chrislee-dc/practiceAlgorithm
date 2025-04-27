class Solution {
  /**
   * @param {number} x
   * @return {number}
   */
  reverse(x) {
    let result = 0;

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    while (x !== 0) {
      let digit = x % 10;
      x = (x / 10) | 0;

      // 오버플로 체크
      if (result > INT_MAX / 10 || (result === INT_MAX / 10 && digit > 7))
        return 0;
      if (result < INT_MIN / 10 || (result === INT_MIN / 10 && digit < -8))
        return 0;

      result = result * 10 + digit;
    }
  }
}

new Solution().reverse(123);
