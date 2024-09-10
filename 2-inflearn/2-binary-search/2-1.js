function solution(arr) {
  const result = arr
    .map((value, index, thisArr) => {
      return {
        value: value,
        next: thisArr[index + 1],
      }
    })
    .filter(({ value, next }) => value < next)

  return result.length
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]))

/**
 * 130 135 [i] < [i+1] ? ++
 * 135 148
 * 148 140
 * 140 145
 * 150 153
 */
