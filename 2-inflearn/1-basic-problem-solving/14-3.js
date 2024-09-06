function solution(arr) {
  const lengths = arr.map(str => str.length)
  const maxLength = Math.max(...lengths)
  const longest = arr.find(str => str.length === maxLength)
  return longest
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']))
