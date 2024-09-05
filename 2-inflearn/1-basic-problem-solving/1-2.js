function solution(a, b, c) {
  return (a < b ? a : b) < c ? (a < b ? a : b) : c
}

console.log(solution(6, 5, 11)) // 5
