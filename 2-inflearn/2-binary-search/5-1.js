function solution(arr) {
  const sortArr = [...arr].sort((a, b) => b - a)

  const findRank = num => {
    return sortArr.findIndex(n => n === num)
  }
  return arr.map(v => findRank(v) + 1)
}

console.log(solution([87, 89, 92, 100, 76]))
