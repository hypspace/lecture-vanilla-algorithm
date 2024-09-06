function solution(str) {
  const middle = Math.floor(str.length / 2)
  return str.length % 2 === 1 ? str[middle] : str[middle - 1] + str[middle]
}

console.log(solution('study'))
console.log(solution('good'))
