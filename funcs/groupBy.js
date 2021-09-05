// 以by函数生成的结果为根据进行分组
function groupBy(collection, by) {
  return collection.reduce((acc, x) => {
    if (acc[by(x)]) { acc[by(x)].push(x) }
    else { acc[by(x)] = [x] }
    return acc
  }, {})
}

const example = [
  { id: 1, name: '张三', sex: 'male' },
  { id: 2, name: '张三', sex: 'female' },
  { id: 3, name: '李四', sex: 'female' }
]

console.log(groupBy(example, x => x.name))