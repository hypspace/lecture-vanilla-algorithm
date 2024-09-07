function solution(arr) {
  const result = arr
    .map((value, index, thisArr) => {
      return {
        value: value,
        next: thisArr[index + 1],
      }
    })
    .filter(({ value, next }) => {
      return next !== undefined && value < next
    })
    .map(({ next }) => {
      return next
    })
  return [arr[0], ...result]
}

console.log(solution([7, 3, 9, 5, 6, 12]))
