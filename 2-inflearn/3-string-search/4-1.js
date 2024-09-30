function solution(str, s) {
  let result = []
  let count = 1000
  for (const x of str) {
    if (x === s) {
      count = 0
    } else {
      count++
    }
    result.push(count)
  }
  count = 1000
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === s) {
      count = 0
    } else {
      count++
      result[i] = Math.min(result[i], count)
    }
  }
  return result
}

console.log(solution('teachermode', 'e'))

/**
 * s 와 같은 문자열에 따라 배열을 빨리 만듦
 * 배열 순회를 거꾸로 돌아서 최소값으로 배열 요소 변경
 */
