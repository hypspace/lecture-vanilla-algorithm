function solution(a, b, c) {
  const sortedSides = [a, b, c].sort((x, y) => x - y) // [가장작은, 두번째작은, 세번째작은]
  return sortedSides[2] < sortedSides[0] + sortedSides[1] ? 'YES' : 'NO'
}

console.log(solution(6, 7, 11)) // YES
console.log(solution(13, 33, 17)) // NO
