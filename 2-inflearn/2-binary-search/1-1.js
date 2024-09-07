function solution(arr) {
  let result = [arr[0]]
  for (let i = 0; i < arr.length; i++) {
    arr[i] < arr[i + 1] ? result.push(arr[i + 1]) : null
  }
  return result
}

console.log(solution([7, 3, 9, 5, 6, 12]))
