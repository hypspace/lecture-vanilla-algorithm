function solution(str) {
  return str.replace(/[a-z]/g, char => char.toUpperCase())
}

console.log(solution('ItisTimeToStudy'))
