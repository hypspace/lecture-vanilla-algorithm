function solution(arr) {
  return arr.reduce((result, current, index) => {
    if (index === 0 || arr[index - 1] < current) {
      result.push(current)
    }
    return result
  }, [])
}

console.log(solution([7, 3, 9, 5, 6, 12]))
