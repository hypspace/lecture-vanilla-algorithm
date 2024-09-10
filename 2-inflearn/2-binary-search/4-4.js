function solution(arr) {
  let result = 0
  let accumulate = 0

  arr.forEach(v => {
    if (v === 1) {
      accumulate++
      result += accumulate
    } else {
      accumulate = 0
    }
  })
  return result
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))
