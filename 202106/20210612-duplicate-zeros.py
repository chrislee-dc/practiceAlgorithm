# // Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

# // Note that elements beyond the length of the original array are not written.

# // Do the above modifications to the input array in place, do not return anything from your function.


# // Input: [1,0,2,3,0,4,5,0]
# // Output: null
# // Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

# // Input: [1,2,3]
# // Output: null
# // Explanation: After calling your function, the input array is modified to: [1,2,3]

# class Solution:
#     def duplicateZeros(self, arr: List[int]) -> None:
#         """
#         Do not return anything, modify arr in-place instead.
#         """

# from typing import List

# test = [1,2,3]
# class Solution:
#     def duplicateZeros(self, arr: List[int]) -> None:

#         # """
#         # Do not return anything, modify arr in-place instead.
#         # """

# duplicateZeros("", test)
# print("Hello, World!")

class Solution(object):
    def duplicateZeros(self, arr):
        arr2 = [i for i in arr]
        i = 0
        j = 0
        while i < len(arr):
            if not arr2[j]:
                arr[i] = 0
                i += 1
                if i < len(arr):
                    arr[i] = 0
            else:
                arr[i] = arr2[j]
            j += 1
            i += 1
        return arr


ob1 = Solution()
print(ob1.duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))

# def sortSquare(arr, n):

#     # First convert each array
#     # elements into its square
#     for i in range(n):
#         arr[i]= arr[i] * arr[i]
#     arr.sort()

# # Driver code
# arr = [-6, -3, -1, 2, 4, 5]
# n = len(arr)

# print("Before sort")
# for i in range(n):
#     print(arr[i], end = " ")

# print("\n")

# sortSquare(arr, n)

# print("After sort")
# for i in range(n):
#     print(arr[i], end = " ")
