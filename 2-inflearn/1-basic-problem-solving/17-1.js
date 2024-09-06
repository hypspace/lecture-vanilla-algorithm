function solution(arr) {
  const set = new Set()

  for (const word of arr) {
    set.add(word)
  }

  return Array.from(set)
}

console.log(solution(['good', 'time', 'good', 'time', 'student']))
