function solution(str, r) {
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === r) {
      count++
    }
  }
  return count
}

console.log(solution('COMPUTERPROGRAMMING', 'R'))
