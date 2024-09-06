function solution(arr) {
  const isOdd = num => num % 2 === 1
  const odds = arr.filter(isOdd)
  const sumOfOdds = odds.reduce((sum, odd) => (sum += odd), 0)
  const minOfOdds = Math.min(...odds)
  return [sumOfOdds, minOfOdds]
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]))
