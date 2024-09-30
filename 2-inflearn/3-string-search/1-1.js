function solution(str) {
  let reverseStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }

  const pattern = new RegExp(`^${reverseStr}$`, 'i') // 'i' 플래그는 대소문자 구분 없음

  return str.match(pattern) ? 'YES' : 'NO'
}

console.log(solution('gooG'))
