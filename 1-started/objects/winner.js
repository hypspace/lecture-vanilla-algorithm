// https://dingco.notion.site/e01348b07e51435cba55330b79f52b6a

function solution(winners) {
  const result = []
  for (const i in winners) {
    for (let j = 0; j < winners[i]; j++) result.push(+i)
  }
}

solution({
  1: 1,
  2: 2,
  3: 4,
}) // [1, 2, 2, 3, 3, 3, 3];
