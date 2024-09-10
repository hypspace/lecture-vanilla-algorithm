function solution(arr) {
  let result = 0
  let accumulate = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      result += 1
      if (arr[i - 1] === 1) {
        accumulate++
        result += accumulate
      }
    } else {
      accumulate = 0
    }
  }
  return result
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))
