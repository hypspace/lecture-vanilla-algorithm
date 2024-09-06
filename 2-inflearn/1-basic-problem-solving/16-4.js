function solution(str) {
  return str
    .split('')
    .reduce((acc, char) => {
      if (!acc.includes(char)) {
        acc.push(char)
      }
      return acc
    }, [])
    .join('')
}

console.log(solution('ksekkset')) // kset
