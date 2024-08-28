// https://dingco.notion.site/939839168bc44b7089dd5fcc8cb0e6a5

function solution(n, members) {
  return (n + 6000) % (4100 * members)
}

solution(50000, 12) // 6800
solution(35000, 9) // 4100
