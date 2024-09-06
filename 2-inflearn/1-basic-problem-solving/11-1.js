function solution(str) {
  const matchesIterator = str.matchAll(/[A-Z]/g)
  const matchesArray = Array.from(matchesIterator) // or..  let count = 0, for of... count ++
  return matchesArray.length
}

console.log(solution('KoreaTimeGood'))
