/**
 * num[i]表示第i-1天股票的价格
 * 在第i天买股票，之后的某一天卖出，求最大利润
 * 从左往右遍历，
 * min变量记录最小入手价
 * max变量记录当前的最高收益
 * 当最低入手价刷新后，min = prices[i]，之后的价格与新的最低价比较
 * 当收益超过max后，max = prices[j]-min，之后的收益与新的最大利润比较
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0; // 初始利润设为0
  let min = prices[0]; // 确定一个股票中的最小值
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else max = Math.max(max, prices[i] - min)
  }
  return max;
};
