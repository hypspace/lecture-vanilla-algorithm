// https://dingco.notion.site/c0b6cedb41254815ba253c129863f0f4

function solution(list) {
  return list.map(v => (v === 1 ? 'Yes' : 'No'))
}

solution([1, 0, 0, 1]) // ["Yes", "No", "No", "Yes"]
solution([1, 1, 1, 1, 0, 1]) // ["Yes", "Yes", "Yes", "Yes", "No", "Yes"]
