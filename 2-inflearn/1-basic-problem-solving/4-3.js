function solution(num) {
  let result = 0

  // for of: 배열 iterator 순회
  for (const e of Array(num).keys()) {
    result += e + 1
  }
  return result
}

console.log(solution(6)) // 21
console.log(solution(10)) // 55
