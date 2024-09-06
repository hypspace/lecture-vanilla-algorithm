function solution(str) {
  return str.split('').reduce((acc, char) => acc + char.toUpperCase(), '')
}

console.log(solution('itisTimeToStudy'))

// *acc(=accumulator): 누적기 혹은 누산기를 의미, 누적된 결과를 저장한다는 변수
// *char(=character): 문자 하나(e.x. a, b, c...)를 의미, 문자열의 각 문자 혹은 단일 문자를 나타내는 변수

// function solution(str) {
//   return str.split('').reduce((acc, char) => {
//     console.log(char.toUpperCase()) // ITIS...
//     return acc + char.toUpperCase();
//   }, '')
// }

// console.log(solution('itisTimeToStudy'))
