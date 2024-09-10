function solution(arr) {
  const newArr = Array.from({ length: arr.length + 2 }, () =>
    Array(arr.length + 2).fill(0)
  )

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
      newArr[i][j] = arr[i - 1][j - 1]
    }
  }

  let count = 0
  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
      const current = newArr[i][j]
      const top = newArr[i - 1][j]
      const bottom = newArr[i + 1][j]
      const left = newArr[i][j - 1]
      const right = newArr[i][j + 1]

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

/**
 * [
 * [0, 0, 0, 0, 0],
 * [0, 5, 3, 7, 0],
 * [0, 3, 7, 1, 0],
 * [0, 7, 2, 5, 0],
 * [0, 0, 0, 0, 0],
 * ]
 */

/**
 *
 * 대상[i][j] > 좌 arr[i][j-1] && 우 arr[i][j+1] && 상 arr[i-1][j] && 하 arr[i+1][j]
 * 5 3,3 arr[0][0] > undefined && arr[0][1] && arr[1][0]
 * 3 5,7,7 arr[0][1] > arr[0][0] && arr[0][2] && arr[1][1]
 *
 */
