function solution(num, arr) {
  const lastDigits = arr.map(v => v % 10)

  let count = 0
  lastDigits.forEach(v => {
    if (v === num) {
      count += 1
    }
  })

  return count
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])) // 3
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30])) // 3
