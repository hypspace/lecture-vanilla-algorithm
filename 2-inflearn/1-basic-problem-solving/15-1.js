function solution(str) {
  const idx = Math.floor(str.length / 2)
  const isOdd = () => str.slice(idx, idx + 1)
  const isEven = () => str.slice(idx - 1, idx + 1)

  return str.length % 2 === 1 ? isOdd() : isEven()
}

console.log(solution('study'))
console.log(solution('good'))
