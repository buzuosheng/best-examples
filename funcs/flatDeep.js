// 将一个数组平铺展开多层
const flatdeep = (list, deep = 1) => {
  let arr = Array.from(list)
  for (let i = 0; i < deep; i++) {
    arr = arr.flat()
  }
  return arr
}

const arr = [1, [2, [3, [4, [5, [6]]]]]]
console.log(flatdeep(arr))

// 第二种实现
function flatten(list, depth = 1) {
  if (depth === 0) return list
  return list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b, depth - 1) : b), [])
}

Array.prototype._flatten = function (deep = 1) {
  if (deep === 0) return this
  return Array.from(this).reduce((a, b) => {
    return a.concat(Array.isArray(b) ? b._flatten(deep - 1) : b)
  }, [])
}

const a = [1, [[[[2]]]]]
console.log(a._flatten(5))