const {
    MinPriorityQueue,
    MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue();
        this.large = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (!this.large.size() || this.large.front() < num) {
            this.large.enqueue(num);
        } else {
            this.small.enqueue(num);
        }

        if (this.large.size() > this.small.size() + 1) {
            this.small.enqueue(this.large.dequeue());
        } else if (this.small.size() > this.large.size() + 1) {
            this.large.enqueue(this.small.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.large.size() > this.small.size()) {
            return this.large.front();
        } else if (this.small.size() > this.large.size()) {
            return this.small.front();
        } else {
            return (this.small.front() + this.large.front()) / 2;
        }
    }
}

medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
// medianFinder.addNum(3); // arr = [1, 3]
// medianFinder.findMedian(); // return 2.0
// medianFinder.addNum(2); // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
