function solution(arr) {
  return arr.reduce((min, curr) => (curr < min ? curr : min), arr[0])
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])) // 2
