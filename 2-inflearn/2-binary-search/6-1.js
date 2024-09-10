function solution(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = 0; j < arr.length; j++) {
      sum += arr[i][j]
    }
    result.push(sum)
  }

  for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j][i]
    }
    result.push(sum)
  }

  let descendSum = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        descendSum += arr[i][j]
      }
    }
    result.push(descendSum)
  }

  let ascendSum = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = arr.length - 1 - i
    ascendSum += arr[i][j]
  }
  result.push(ascendSum)

  // 시간 복잡도: O(n^2)
  return Math.max(...result)
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
)

/**
 *
 * 10 13 10 arr[0][0] arr[0][1] arr[0][2]
 * 12 39 30 arr[1][0] arr[1][1] arr[1][2]
 * 11 25 50 arr[2][0] arr[2][1] arr[2][2]
 *
 * 10 12 11 arr[0][0] arr[1][0] arr[2][0]
 * 13 39 25 arr[0][1] arr[1][1] arr[2][1]
 * 10 30 50 arr[0][2] arr[1][2] arr[2][2]
 *
 * 10 39 50 arr[0][0] arr[1][1] arr[2][2]
 *
 * 11 39 10 arr[2][0] arr[1][1] arr[0][2]
 *
 */
