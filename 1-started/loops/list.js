// https://dingco.notion.site/9382a612522e40499f31501722c254ce

function solution(list, limit, reports) {
  const result = list.reduce((prev, curr) => prev + curr)
  return result - limit + reports <= 0 ? true : false
}

solution([1, 5, 4, 3], 15, 3) // false
solution([1, 1, 1, 2], 7, 2) // true
