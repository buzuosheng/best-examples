// 将一个数组平铺展开
export const flat = (list) => [].concat(...list)

const arr = [1, 2, [3, 4]]
console.log(flat(arr))
