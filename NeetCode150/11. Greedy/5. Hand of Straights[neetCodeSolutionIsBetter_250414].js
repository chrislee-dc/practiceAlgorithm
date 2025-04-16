const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

class Solution {
  /**
   * @param {number[]} hand
   * @param {number} groupSize
   * @return {boolean}
   */
  isNStraightHand(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
      return false;
    }

    const count = {};
    for (const n of hand) {
      count[n] = (count[n] || 0) + 1;
    }

    const minPQ = new MinPriorityQueue();
    for (const key in count) {
      minPQ.push(Number(key));
    }

    while (!minPQ.isEmpty()) {
      const first = minPQ.front();
      for (let i = first; i < first + groupSize; i++) {
        if (!(i in count) || count[i] === 0) {
          return false;
        }
        count[i] -= 1;
        if (count[i] === 0) {
          if (i !== minPQ.front()) {
            return false;
          }
          minPQ.pop();
        }
      }
    }
    return true;
  }
}

// (hand = [1, 2, 4, 2, 3, 5, 3, 4]), (groupSize = 4);
(hand = [1, 2, 3, 3, 4, 5, 6, 7]), (groupSize = 4);
// hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// (hand = [1, 2, 3, 4, 5]), (groupSize = 4);

new Solution().isNStraightHand(hand, groupSize);
// new Solution().isNStraightHand(hand, groupSize);
// console.log();
