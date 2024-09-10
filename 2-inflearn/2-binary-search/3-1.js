function solution(arr1, arr2) {
  const result = arr1.map((value, index) => {
    if (value === arr2[index]) return 'D'
    else if (value === 1 && arr2[index] === 3) return 'A'
    else if (value === 2 && arr2[index] === 1) return 'A'
    else if (value === 3 && arr2[index] === 2) return 'A'
    else return 'B'
  })
  return result
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]))

/**
 * 가위: 1
 * 바위: 2
 * 보: 3
 *
 * 1, 2 ? 2
 * 1, 3 ? 1
 * 2, 3 ? 3
 *
 */
