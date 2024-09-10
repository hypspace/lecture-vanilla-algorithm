function solution(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // optional chaining & nullish operator collaboration
      const current = arr[i][j]
      const top = arr[i - 1]?.[j] ?? 0
      const bottom = arr[i + 1]?.[j] ?? 0
      const left = arr[i]?.[j - 1] ?? 0
      const right = arr[i]?.[j + 1] ?? 0

      if (
        current > top &&
        current > bottom &&
        current > left &&
        current > right
      ) {
        count++
      }
    }
  }
  return count
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
)

// e.x.) optional chaining과 nullish operator를 통해 arr[a]이 아닌 arr[a][b]의 경우
//  배열의 경계를 벗어난 접근에 대해서는 에러가 나오는데 이를 처리하려는 의도

/* case 1. */
// const testArr = [1]
// console.log(testArr[9]) // not Error: undefined

/* case 2. */
// const testArr2 = [[1], [2]]
// console.log(testArr2[0][9]) // not Error: undefined
// console.log(testArr2[9][9]) // Error!
// console.log(testArr2[9]?.[9]) // not Error: undefined
// const areaNumber = testArr2[9]?.[9] ?? 0 // 0
