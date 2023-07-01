// const data = [1, 2, 3, 4, 5];
const data = [1, 2, 4, 5, 7, 8, 10, 12, 15, 17, 18];

function binarySearch(left, right, arr, target) {
  if (arr[left] === target) return left
  if (arr[right] === target) return right
  const pivot = Math.ceil((left + right) / 2)
  if (arr[pivot] === target) return pivot
  if (arr[pivot] < target) {
    return binarySearch(pivot, right, arr, target)
  } else if (arr[pivot] > target) {
    return binarySearch(left, pivot, arr, target)
  }
  return -1
}

console.log(binarySearch(0, data.length -1, data, 17))