function solution(arr) {
  let accumulate = 0
  const result = arr
    .map(value => (value === 1 ? ++accumulate : (accumulate = 0)))
    .reduce((prev, curr) => prev + curr, 0)
  return result
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))
