// https://dingco.notion.site/ce3e1d543b0b45c69709f10b2ce111be

function solution(feature) {
  return feature.filter(elm => elm != 'bug')
}

solution(['code', 'bug', 'code']) // ["code", "code"]
solution(['code', 'code']) // ["code", "code"]
