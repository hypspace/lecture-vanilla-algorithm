function solution(str) {
  return str
    .split('')
    .filter((char, index, self) => {
      self.indexOf(char) === index
    })
    .join('')
}

console.log(solution('ksekkset')) // kset
