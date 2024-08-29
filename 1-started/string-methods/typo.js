// https://dingco.notion.site/c46f8261ca724aba8d8b266f2aba6229

function solution(str) {
  if (!str.includes('Q') && !str.includes('q')) return -1
  return str.replaceAll('Q', 'A').replaceAll('q', 'a')
}

solution("It works, I don't know why.") // -1
solution(
  'Qre you sleeping? Yes, now shut up. I know how to fix thqt bug on line 255.'
) // Are you sleeping? Yes, now shut up. I know how to fix that bug on line 255.
