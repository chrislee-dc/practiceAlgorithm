const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

class MedianFinder {
    constructor() {
        this.queue = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.queue.enqueue(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        let arr = this.queue.toArray();
        console.log("🚀 ~ MedianFinder ~ findMedian ~ arr:", arr);

        let mid = Math.floor(arr.length % 2);
        console.log("🚀 ~ MedianFinder ~ findMedian ~ mid:", mid);

        if (arr.length % 2 === 1) {
            console.log(arr[mid]);
            return parseFloat(arr[mid]);
        }

        return parseFloat((arr[mid] + arr[mid + 1]) / 2);
    }
}

medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
console.log(medianFinder.findMedian()); // return 1.0
// medianFinder.addNum(3); // arr = [1, 3]
// medianFinder.findMedian(); // return 2.0
// medianFinder.addNum(2); // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
