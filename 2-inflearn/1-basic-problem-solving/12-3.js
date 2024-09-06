function solution(str) {
  return Array.from(str)
    .map(char => char.toUpperCase())
    .join('')
}

console.log(solution('ItisTimeToStudy'))
