function solution(num) {
  let result = 0
  for (let i = 1; i <= num; i++) {
    result += i
  }
  return result
}

console.log(solution(6)) //  21
console.log(solution(10)) // 55
