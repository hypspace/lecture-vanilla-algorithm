// https://dingco.notion.site/siri-2736803d83f14e88aeb015e65903002d

function solution(search, recommends) {
  for (let i = search.length; i > 0; i--) {
    const slicedSearch = search.slice(0, i)

    for (let j = 0; j < recommends.length; j++) {
      if (!recommends[j].startsWith(slicedSearch)) break
      if (j === recommends.length - 1) return slicedSearch
    }
  }
  return ''
}

solution('flutter', ['flower', 'flow', 'flight']) // "fl"
solution('apple', ['dad', 'racecar', 'car']) // ""
