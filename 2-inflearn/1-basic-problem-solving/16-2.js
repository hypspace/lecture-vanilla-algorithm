function solution(str) {
  const result = []

  for (const char of str) {
    if (result.indexOf(char) === -1) {
      result.push(char)
    }
  }

  return result.join('')
}

console.log(solution('ksekkset'))
