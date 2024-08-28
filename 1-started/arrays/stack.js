// https://dingco.notion.site/cacf6c06a1094714824e1063e8e10d7d

function solution(stacks) {
  return stacks.sort().reverse()
}

solution(['typescript', 'express', 'node', 'react']) // ["typescript", "react", "node", "express"]
solution(['docker', 'graphql', 'javascript']) // ["javascript", "graphql", "docker"]
