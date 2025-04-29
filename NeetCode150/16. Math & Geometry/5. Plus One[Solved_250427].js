class Solution {
  /**
   * @param {number[]} digits
   * @return {number[]}
   */
  plusOne(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i > -1; i--) {
      if (digits[i] < 9) {
        digits[i] += carry;
        carry = 0;
        return digits;
      }

      digits[i] = 0;
      carry = 1;
    }

    return [1, ...digits];
  }
}
