// https://dingco.notion.site/2cf7190383fe4868ae815d5ea7f8cf0d

function solution(year) {
  if (year === 3) return 5
  if (year === 5) return 12
  if (year === 10) return 30
  return 0
}

solution(3) // 5
solution(4) // 0
solution(5) // 12
solution(7) // 0
solution(10) // 30
