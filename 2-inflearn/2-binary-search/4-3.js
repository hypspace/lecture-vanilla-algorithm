function solution(arr) {
  let accumulate = 0
  const result = arr.reduce((total, curr) => {
    if (curr === 1) {
      accumulate++
      return total + accumulate
    } else {
      accumulate = 0
      return total
    }
  }, 0)
  return result
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))
