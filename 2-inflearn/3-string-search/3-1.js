function solution(str) {
  const pattern = /[0-9]/g
  const result = str.match(pattern).join('')

  return Number(result)
}

console.log(solution('g0en2T0s8eSoft'))
