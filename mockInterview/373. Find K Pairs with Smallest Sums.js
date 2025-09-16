const {
    MinPriorityQueue,
    PriorityQueue,
} = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    let pq = new PriorityQueue((a, b) => a[0] + a[1] - (b[0] + b[1]));

    for (let i = 0; i < nums1.length; i++) {
        pq.enqueue([nums1[i], nums2[0], 0]);
    }
    /**
     * 1,2
     * 7,2
     * 11,2
     *
     * 1, 10
     *
     */

    let result = [];

    while (k > 0 && !pq.isEmpty()) {
        let [x, y, i2] = pq.dequeue();
        result.push([x, y]); // 1,2 => 1,4 => 1,6
        if (i2 < nums2.length - 1) {
            pq.enqueue([x, nums2[i2 + 1], i2 + 1]); // 1 ,4  => 1,6
        }
        k--;
    }
    return result;
};

(nums1 = [1, 7, 11]), (nums2 = [2, 4, 6]), (k = 3);

kSmallestPairs(nums1, nums2, k);
