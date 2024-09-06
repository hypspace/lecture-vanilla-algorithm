function solution(str, r) {
  const regex = new RegExp(r, 'g')
  const matches = str.match(regex)
  return matches ? matches.length : 0
}

console.log(solution('COMPUTERPROGRAMMING', 'R'))
