// https://dingco.notion.site/dcc42a279455439e877136a11b2d0f4c

function solution(arr) {
  const team = {}
  arr.map(v => {
    if (team[v] === undefined) team[v] = 1
    else team[v] = team[v] + 1
  })

  const oddNumber = Object.values(team).filter(v => v % 2 === 1)[0]
  return Number(Object.keys(team).filter(v => team[v] === oddNumber))
}

solution([1, 2, 2, 1, 1]) // 1
solution([5, 1, 2, 2, 5, 3, 3, 1, 5]) // 5
solution([2, 4, 3, 3, 2, 4, 1]) // 1
