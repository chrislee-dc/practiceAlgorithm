/**
 *
 */

const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

class Solution {
  /**
   * @param {number[]} stones
   * @return {number}
   */
  lastStoneWeight(stones) {
    const maxHeap = new MaxPriorityQueue();

    for (let i = 0; i < stones.length; i++) {
      maxHeap.enqueue(stones[i]);
    }

    return this.lastRemainingStone(maxHeap);
  }

  lastRemainingStone(stones) {
    if (stones.size() < 2) return stones.front() || 0;

    const firstEle = stones.dequeue();
    const secondEle = stones.dequeue();

    firstEle - secondEle > 0 ? stones.enqueue(firstEle - secondEle) : "";
    return this.lastRemainingStone(stones);
  }
}

console.log(new Solution().lastStoneWeight([1, 2]));
