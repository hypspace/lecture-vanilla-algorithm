function solution(arr) {
  return arr.reduce(
    (prev, curr) => (curr.length < prev.length ? prev : curr),
    ''
  )
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']))
