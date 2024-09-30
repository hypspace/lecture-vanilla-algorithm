function solution(str) {
  const pattern = /[a-zA-Z]/g // 'g' 플래그는 전체 문자열에서 모두 찾기 위해 사용
  const matchArr = str.match(pattern)
  const reverseMatchArr = matchArr.reverse()
  return matchArr.join('') === reverseMatchArr.join('') ? 'YES' : 'NO'
}

console.log(solution('found7,  time:  study;  Yduts;  emit,  7Dnuof'))
