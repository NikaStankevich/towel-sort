
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortedArr = [];

  if (matrix) {
    matrix.forEach((el, i) => {
      if (i%2) {
        sortedArr = sortedArr.concat(el.reverse()); 
      } else {
        sortedArr = sortedArr.concat(el); 
      }
    });
  }

  return sortedArr;
}
