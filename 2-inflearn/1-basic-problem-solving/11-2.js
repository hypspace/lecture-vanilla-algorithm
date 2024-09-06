function solution(str) {
  const matches = str.match(/[A-Z]/g)
  return matches.length
}

console.log(solution('KoreaTimeGood'))
