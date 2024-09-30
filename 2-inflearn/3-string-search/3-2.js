function solution(str) {
  const pattern = /[a-zA-Z]/g
  const result = str.replace(pattern, '')

  return Number(result)
}

console.log(solution('g0en2T0s8eSoft'))
