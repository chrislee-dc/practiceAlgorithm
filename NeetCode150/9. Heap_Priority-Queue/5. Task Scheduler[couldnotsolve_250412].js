const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
const { Queue } = require("@datastructures-js/queue");

class Solution {
  /**
   * @param {character[]} tasks
   * @param {number} n
   * @return {number}
   */
  leastInterval(tasks, n) {
    let count = Array(26).fill(0);
    let aCharCodeAt = "A".charCodeAt(0);

    for (let i = 0; i < tasks.length; i++) {
      count[tasks.charCodeAt(i) - aCharCodeAt]++;
    }

    let maxHeap = new MaxPriorityQueue();
    for (let i = 0; i < count.length; i++) {
      if (count[i] > 0) {
        maxHeap.push(count[i]);
      }
    }

    let time = 0;
    let queue = new Queue();

    while (queue.size() || maxHeap.size()) {
      time++;

      if (maxHeap.size()) {
        let num = maxHeap.pop() - 1;
        // if()
        if (num > 0) {
          queue.push([num, time + n]);
        }
      }

      if (queue.size() && queue.front()[1] === time) {
        maxHeap.push(queue.pop()[0]);
      }
    }
    return time;
  }
}

(tasks = ["A", "C", "A", "B", "D", "B"]), (n = 1);

new Solution().leastInterval(tasks, n);
