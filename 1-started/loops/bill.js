// https://dingco.notion.site/90e2c1d434ff4eff95eefd1ae96044c9

function solution(bill) {
  const arr = []
  let count = 0
  for (let i = 0; i < bill.length; i++) {
    for (let j = 0; j < bill[i].length; j++) {
      count += bill[i][j]
    }
    arr.push(count)
  }
  return count
}

function solution2(bill) {
  const arr = []
  const reducer = (prev, curr) => prev + curr
  for (let i = 0; i < bill.length; i++) arr.push(bill[i].reduce(reducer, 0))

  return arr
}

solution2([
  [1000, 500, 800],
  [600, 200, 200],
]) // [2300, 1000]
solution2([
  [1, 2],
  [3, 3, 4, 5, 6],
]) //[(3, 21)]
