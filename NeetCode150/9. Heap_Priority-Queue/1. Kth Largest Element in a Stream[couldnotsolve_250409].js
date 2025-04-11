class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.minPriorityQueue = new MinPriorityQueue();

    for (let n of nums) {
      this.minPriorityQueue.enqueue(n);
    }

    while (this.minPriorityQueue.size() > k) {
      this.minPriorityQueue.dequeue();
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.minPriorityQueue.enqueue(val);

    if (this.minPriorityQueue.size() > this.k) {
      this.minPriorityQueue.dequeue();
    }

    return this.minPriorityQueue.front();
  }
}
ㅠ;
