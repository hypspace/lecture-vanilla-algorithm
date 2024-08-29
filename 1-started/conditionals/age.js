// https://dingco.notion.site/90af80ea840c4fdfa81c4fb959d3ab2e

function solution(age) {
  if (age <= 3) return '분유 스틱'
  if (age <= 7) return '초콜릿과 사탕'
  if (age > 7) return '쿠키'
}

solution(7) // “초콜릿과 사탕”
solution(2) // “분유 스틱”
solution(19) // “쿠키”
