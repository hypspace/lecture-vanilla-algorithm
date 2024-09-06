function solution(str) {
  const middle = Math.floor(str.length / 2)
  return str.length % 2 === 1
    ? str.substring(middle, middle + 1)
    : str.substring(middle - 1, middle + 1)
}

console.log(solution('study'))
console.log(solution('good'))
