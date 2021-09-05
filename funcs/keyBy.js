// 以by函数生成的结果为根据进行分组，后边的数据会覆盖之前的数据
function keyBy(collection, by) {
  return collection.reduce((acc, x) => {
    acc[by(x)] = x
    return acc
  }, {})
}

let c = [
  { id: 1, name: '张三', sex: 'male' },
  { id: 2, name: '张三', sex: 'female' },
  { id: 3, name: '李四', sex: 'female' }
]
console.log(keyBy(c, x => x.name))