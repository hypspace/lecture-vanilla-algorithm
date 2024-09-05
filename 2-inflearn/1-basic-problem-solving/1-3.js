function solution(a, b, c) {
  return [a, b, c].reduce((min, curr) => (curr < min ? curr : min))
}

console.log(solution(6, 5, 11)) // 5
