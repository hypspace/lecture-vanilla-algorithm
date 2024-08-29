// https://dingco.notion.site/9cd5946dab694f94ba6e175b4744fdcb

function solution(vote) {
  const maxValue = Math.max(...vote)
  return vote.indexOf(maxValue) + 1
}

solution([5, 2, 0, 1, 0]) // 1
solution([0, 0, 1, 7, 0, 4, 2]) // 4
