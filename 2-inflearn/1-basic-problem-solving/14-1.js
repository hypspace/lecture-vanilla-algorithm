function solution(arr) {
  let result = arr[0]
  for (let i = 0; i < arr.length; i++) {
    result.length < arr[i].length ? (result = arr[i]) : result
  }
  return result
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']))
