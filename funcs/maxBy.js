// 以by函数生成的结果为根据找出最大项
export function maxBy(array, by) {
  return array.reduce((a, b) => by(a) > by(b) ? a : b, {})
}

const objects = [{ 'n': 1 }, { 'n': 2 }];
// console.log(maxBy(objects, o => o.n))