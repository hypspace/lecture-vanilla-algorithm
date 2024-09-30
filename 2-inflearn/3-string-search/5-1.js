function solution(str) {
  return str.split('').reduce(
    (acc, curr, idx, arr) => {
      if (curr === arr[idx - 1]) {
        acc.count++
      } else {
        if (acc.count > 0) {
          acc.result += acc.count > 1 ? acc.count : ''
        }
        acc.result += curr
        acc.count = 1
      }
      return acc
    },
    { result: '', count: 0 }
  ).result
}

console.log(solution('KKHSSSSSSSE'))
