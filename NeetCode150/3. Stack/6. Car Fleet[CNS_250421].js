// Car Fleet
// There are n cars traveling to the same destination on a one-lane highway.

// You are given two arrays of integers position and speed, both of length n.

// position[i] is the position of the ith car (in miles)
// speed[i] is the speed of the ith car (in miles per hour)
// The destination is at position target miles.

// A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

// A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

// If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

// Return the number of different car fleets that will arrive at the destination.

// Example 1:

// Input: target = 10, position = [1,4], speed = [3,2]

// Output: 1
// Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.

// Example 2:

// Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]

// Output: 3
// Explanation: The cars starting at 4 and 7 become a fleet at position 10. The cars starting at 1 and 0 never catch up to the car ahead of them. Thus, there are 3 car fleets that will arrive at the destination.

// Constraints:

// n == position.length == speed.length.
// 1 <= n <= 1000
// 0 < target <= 1000
// 0 < speed[i] <= 100
// 0 <= position[i] < target
// All the values of position are unique.

class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */

  carFleet(target, position, speed) {
    const ps = position
      .map((p, i) => [p, speed[i]])
      .sort((a, b) => b[0] - a[0]);

    let count = 1;
    let prevValue = (target - ps[0][0]) / ps[0][1];
    for (let i = 1; i < ps.length; i++) {
      const currValue = (target - ps[i][0]) / ps[i][1];
      if (prevValue < currValue) {
        count++;
        prevValue = currValue;
      }
    }
    return count;
  }

  // carFleet3(target, position, speed) {
  //   const cars = {};
  //   const set = new Set();
  //   position.forEach((item, index) => {
  //     cars[item] = index;
  //   });

  //   const carPosition = Object.keys(cars).sort((a, b) => b - a);
  //   // console.log("🚀 ~ Solution ~ carFleet ~ carPosition:", carPosition)

  //   let prevValue =
  //     (target - carPosition[carPosition.length - 1]) /
  //     speed[cars[carPosition[carPosition.length - 1]]];

  //   console.log("🚀 ~ Solution ~ carFleet ~ prevValue:", prevValue);
  //   for (let i = carPosition.length - 2; i > -1; i--) {
  //     const currCar = (target - carPosition[i]) / speed[cars[carPosition[i]]];
  //     console.log(
  //       "🚀 ~ Solution ~ carFleet ~ currCar:",
  //       { currCar, prevValue, target },
  //       carPosition[i],
  //       speed[cars[carPosition[i]]]
  //     );
  //     if (currCar < prevValue) {
  //       set.add(prevValue);
  //     }
  //     prevValue = currCar;
  //   }
  //   console.log(set);
  // }

  // carFleet2(target, position, speed) {
  //   const set = new Set();

  //   for (let i = 0; i < position.length; i++) {
  //     console.log((target - position[i]) / speed[i]);
  //     set.add((target - position[i]) / speed[i]);
  //   }

  //   console.log("🚀 ~ Solution ~ carFleet ~ set.size:", set.size);
  //   return set.size;
  // }
}

// target = 10, position = [1,4], speed = [3,2]

// Input: target = 10, position = [1,4], speed = [3,2]
// target = 10, position = [4,1,0,7], speed = [2,2,1,1] dfa

// target=12
// position=[10,8,0,5,3]
// speed=[2,4,1,1,3]

// new Solution().carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1]);
new Solution().carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
// new Solution().carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
