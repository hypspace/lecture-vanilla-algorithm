// https://dingco.notion.site/37b683fcd0b445408eacfbb3ef91b8f9

function solution(team) {
  team.dev = [...team.dev, '원두']
  return team
}

solution({ dev: ['카페', '라떼'] }) // {dev: ["카페", "라떼", "원두"]}
