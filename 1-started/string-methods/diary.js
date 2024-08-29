// https://dingco.notion.site/5239ddadbad949f282f8024e58ff3eb8

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
function solution(str) {
  const arr = []

  for (let i = 0; i < str.split('').length; i++) {
    if (str.split('')[i] === ' ') arr.push(' ')
    else {
      for (let j = 0; j < ALPHABET.split('').length; j++) {
        if (str[i].toLocaleLowerCase() === ALPHABET.split('')[j]) {
          str[i] === str[i].toUpperCase()
            ? arr.push(ALPHABET.split('').reverse()[j].toUpperCase())
            : arr.push(ALPHABET.split('').reverse()[j])
        }
      }
    }
  }
  return arr
}

function solution2(str) {
  let result = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += ' '
      continue
    }

    const index = ALPHABET.indexOf(str[i])
    if (index === -1) {
      const toUpperCaseIdx = ALPHABET.indexOf(str[i].toLocaleLowerCase())
      result += ALPHABET[ALPHABET.length - 1 - toUpperCaseIdx].toUpperCase()
    } else {
      result += ALPHABET[ALPHABET.length - 1 - index]
    }
  }
  return result
}

solution('R dzmg gl vzg ggvlpylppr') // "I want to eat tteokbokki"
solution('Xzgh ziv xfgv') // "Cats are cute"
