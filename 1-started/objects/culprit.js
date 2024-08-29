// https://dingco.notion.site/3e623b80f26f4fae8a850589e8b7d7eb

function solution(arr) {
  const valArr = []
  arr.forEach(v => {
    valArr.push(Object.values(v)[1])
  })

  let result = ''
  arr.forEach(v => {
    if (v.time === Math.max(...valArr)) result = v.name
  })
  return `범인은 바로 ${result} 입니다!`
}

function solution2(arr) {
  let latestTime = 0
  let culprit = ''

  arr.map(el => {
    if (el.time > latestTime) {
      latestTime = el.time
      culprit = el.name
    }
  })
  return `범인은 바로 ${culprit} 입니다!`
}

solution([
  { name: '카페', time: 15 },
  { name: '모카', time: 12 },
  { name: '라떼', time: 10 },
  { name: '아라비카', time: 16 },
  { name: '아라비카2', time: 14 },
]) // "범인은 바로 아라비카 입니다!"
