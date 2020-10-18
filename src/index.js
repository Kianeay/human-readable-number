module.exports = function toReadable (number) {
   let firstMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
    [4, 'four'],
    [5, 'five'],
    [6, 'six']
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine']
    [10, 'ten']
  ]);

  let secondMap = new Map([
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen']
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen']
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen']
      ]);

      let thirdMap = new Map([
        [20, 'eleven'],
        [30, 'twelve'],
        [40, 'thirteen']
        [50, 'fourteen'],
        [60, 'fifteen'],
        [70, 'sixteen']
        [80, 'seventeen'],
        [90, 'eighteen'],
        [100, 'nineteen']
          ]);

    if (number.length = 0) {
        for (let num of firstMap.keys()) {
if (number === num) {
   return map.get(num)
}
        }
    }
}
