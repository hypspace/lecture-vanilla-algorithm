function solution(a, b, c) {
  let result

  if (a < b) result = a
  else result = b
  if (c < result) result = c
  else result
  return result
}

console.log(solution(6, 5, 11)) // 5
