// https://dingco.notion.site/08f908953dcb4e808c781dd88f434963

function solution(menuList, today) {
  if (menuList.length > 10 || menuList.includes(today)) return menuList
  menuList.push(today)
  return menuList
}

solution(['돈까스', '마라샹궈'], '마라탕') // [ "돈까스", "마라샹궈", "마라탕" ]
solution(['국밥', '파스타', '카레라이스'], '닭갈비') // [ "국밥", "파스타", "카레라이스", "닭갈비" ]
solution(['쌀국수'], '쌀국수') // [ "쌀국수" ]
