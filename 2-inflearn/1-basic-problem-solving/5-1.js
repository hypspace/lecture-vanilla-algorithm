function solution(arr) {
  let result = arr[0]
  for (let i = 0; i < arr.length; i++) {
    arr[i] < result ? (result = arr[i]) : result
  }

  return result
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])) // 2
