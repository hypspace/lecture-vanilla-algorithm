// https://dingco.notion.site/bd3502ef57f64a429486495b1810d618

function solution(prev, join) {
  const firstElm = prev.shift()
  return [join, ...prev, firstElm]
}

solution(['sudo', '임금'], '라떼') // ["라떼", "임금", "sudo"];
solution(['아버', '광어', '안드로이드', 'siri'], '피카츄') // ["피카츄", "광어", "안드로이드", "siri", "아버"];
