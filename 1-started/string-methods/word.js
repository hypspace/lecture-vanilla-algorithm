// https://dingco.notion.site/to-the-to-the-9724a8d5b6774bd8bc5e6555ee94dc1b

function solution(word) {
  return word.split('').reverse().join('') === word ? true : false
}

solution('역삼역') // true
solution('고양이') // false
