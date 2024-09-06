function solution(a, b, c) {
  return c < a + c && b < a + c && a < b + c ? 'YES' : 'NO'
}

console.log(solution(6, 7, 11)) // YES
console.log(solution(13, 33, 17)) // NO
