// 数组中出现最频繁的元素
import { maxBy } from './maxBy.js'

function getFrequent(arr) {
  let res = arr.reduce((acc, x) => {
    if (acc[x]) { acc[x]++ }
    else acc[x] = 1
    return acc
  }, {})
  return maxBy(Object.entries(res), x => x[1])
}

const a = 'safaslkgadaojlfkajlg'.split('')
console.log(getFrequent(a)) // ["a", 5]