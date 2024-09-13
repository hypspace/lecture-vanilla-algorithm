function solution(str) {
  const lowerStr = str.toLowerCase()
  const reverseStr = lowerStr.split('').reverse().join('')

  return lowerStr === reverseStr ? 'YES' : 'NO'
}

console.log(solution('gooG'.toLowerCase()))
