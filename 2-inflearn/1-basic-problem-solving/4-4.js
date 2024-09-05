function solution(num) {
  const arr = Array.from({ length: num }, (_, k) => k + 1) // _: 무시할 파라미터 혹은 변수 정의에 쓰임
  return arr.reduce((sum, curr) => (sum += curr), 0)
}

console.log(solution(6)) // 21
console.log(solution(10)) // 55
