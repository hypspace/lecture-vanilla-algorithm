function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const filteredArr = arr.filter(v => v !== arr[i] && v !== arr[j])
      const sumOfArr = filteredArr.reduce((sum, curr) => (sum += curr), 0)
      if (sumOfArr === 100) {
        return filteredArr
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])) // [ 20, 7, 23, 19, 10, 8, 13 ]

/**
 * 123
 * 124
 * 125
 * 134
 * 135
 * 145
 *
 * 234
 * 235
 * 245
 *
 * 345
 */
