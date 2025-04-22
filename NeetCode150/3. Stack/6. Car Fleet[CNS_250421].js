// https://chatgpt.com/c/68070c0c-27c0-8011-81d6-9217ce8c986d

/**
 * Reference Chat
 * https://chatgpt.com/c/68070c0c-27c0-8011-81d6-9217ce8c986d
 */

class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */

  carFleet(target, position, speed) {
    const cars = position
      .map((pos, i) => [pos, speed[i]])
      .sort((a, b) => b[0] - a[0]);

    const stack = [];

    for (let [pos, spe] of cars) {
      let time = (target - pos) / spe;
      if (!stack.length || time > stack[stack.length - 1]) {
        stack.push(time);
      }
    }
    return stack.length;
  }
}

new Solution().carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
