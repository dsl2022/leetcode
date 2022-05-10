/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function (encoded1, encoded2) {
  let first = 0;
  let second = 0;
  const ans = [];
  while (
    (first < encoded1.length || second < encoded2.length) &&
    (encoded1[encoded1.length - 1][1] !== 0 ||
      encoded2[encoded2.length - 1][1] !== 0)
  ) {
    const [firstVal, firstFreq] = encoded1[first];
    const [secVal, secFreq] = encoded2[second];
    const product = firstVal * secVal;
    const curFreqDiff = Math.abs(firstFreq - secFreq);
    if (curFreqDiff === 0) {
      ans.push([product, firstFreq]);
      encoded1[first][1] = 0;
      encoded2[second][1] = 0;
      first += 1;
      second += 1;
    } else {
      if (firstFreq > secFreq) {
        ans.push([product, secFreq]);
        encoded1[first][1] = firstFreq - secFreq;
        encoded2[second][1] = 0;
        second += 1;
      } else {
        ans.push([product, firstFreq]);
        encoded1[first][1] = 0;
        encoded2[second][1] = secFreq - firstFreq;
        first += 1;
      }
    }
    if (ans.length > 1 && ans[ans.length - 1][0] === ans[ans.length - 2][0]) {
      const lastAns = ans.pop();
      ans[ans.length - 1][1] += lastAns[1];
    }
  }
  return ans;
};

const runningOne = [
  [1, 3],
  [2, 3],
];
const runningTwo = [
  [6, 3],
  [3, 3],
];

(encoded1 = [
  [1, 3],
  [2, 1],
  [3, 2],
]),
  (encoded2 = [
    [2, 3],
    [3, 3],
  ]);
console.log(findRLEArray(encoded1, encoded2));
