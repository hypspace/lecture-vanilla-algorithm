function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const copy = arr.slice()
      copy.splice(j, 1)
      copy.splice(i, 1)

      const sumOfRemaining = copy.reduce((sum, curr) => sum + curr, 0)
      if (sumOfRemaining === 100) {
        return copy //
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])) // [ 20, 7, 23, 19, 10, 8, 13 ]
