function solution(a, b, c) {
  const max = Math.max(a, b, c)
  const sumOfOthers = [a, b, c]
    .filter(v => v !== max)
    .reduce((prev, curr) => prev + curr)

  return max < sumOfOthers ? 'YES' : 'NO'
}

console.log(solution(6, 7, 11)) // YES
console.log(solution(13, 33, 17)) // NO
