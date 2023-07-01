// const data = [1, 2, 3, 4, 5];
// const data = [1, 2, 4, 5, 7, 8, 10, 12, 15, 17, 18];
const data = [-1,0,3,5,9,12]
// const data = [5]

// https://leetcode.com/problems/binary-search/description/
// function binarySearch(left, right, arr, target) {
//   if (left > right) return -1
//   const pivot = Math.floor((left + right) / 2)
//   if (arr[pivot] === target) return pivot
//   if (arr[pivot] < target) {
//     return binarySearch(pivot + 1, right, arr, target)
//   }
//   return binarySearch(left, pivot - 1, arr, target)
// }

// try {
//   console.log(binarySearch(0, data.length -1, data, 2))
// } catch (error) {
//   console.log(error)
// }

function binarySearch(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) return mid
    if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

console.log(binarySearch(data, 9))