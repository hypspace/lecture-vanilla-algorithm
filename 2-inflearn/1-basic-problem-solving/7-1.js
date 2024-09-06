function solution(num, arr) {
  const strArr = arr.map(v => v.toString())
  const lastDigits = strArr.map(v => Number(v.slice(-1)))

  let count = 0
  lastDigits.reduce((_, curr) => (curr === num ? (count += 1) : null))
  return count
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])) // 3
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30])) // 3
