// https://dingco.notion.site/72e5e2d71c364b6eac7725160a4dddc4

function solution(barcode) {
  const arr = []
  const result = barcode.filter(v => {
    if (v === 0) arr.push(v)
    return v
  })
  return result.concat(arr)
}

solution([8, 8, 0, 1, 2, 3, 4, 5, 6, 0, 1, 0, 5]) // [8, 8, 1, 2, 3, 4, 5, 6, 1, 5, 0, 0, 0]
solution([0, 7, 6, 0, 0, 4, 6, 9, 0, 2, 5, 0, 1]) // [7, 6, 4, 6, 9, 2, 5, 1, 0, 0, 0, 0, 0]
