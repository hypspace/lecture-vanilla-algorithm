function solution(str) {
  const result = Array.from(str)
    .map(v => (!!v.match(/[a-z]/) ? v.toUpperCase() : v.toLowerCase()))
    .join('')

  return result
}

console.log(solution('StuDY'))
