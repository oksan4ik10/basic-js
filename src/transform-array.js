const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let res = [];

  for (let index = 0; index < arr.length; index++) {
      if(((arr[index] === '--double-next')||(arr[index] === '--discard-next'))&&(index == arr.length-1)) return res;
      if(((arr[index] === '--double-prev')||(arr[index] === '--discard-prev'))&&(index == 0)) {
          continue;
      };
      if((index+2 <= arr.length-1)&&(((arr[index] === '--discard-next')&&(arr[index+2] === '--discard-prev'))||((arr[index] === '--discard-next')&&(arr[index+2] === '--double-prev')))){
          arr[index+2] = false;

      }
      if (!arr[index]) {
          continue;
      } 
      res.push(arr[index]);


      if (arr[index] === '--double-next') {
          res[res.length-1] = arr[index+1]
      } else if(arr[index] === '--double-prev'){
       
          res[res.length-1] = arr[index-1];

      } else if (arr[index] === '--discard-prev'){
          res.pop();
          res.pop();

      } else if (arr[index] === '--discard-next'){
          res.pop();
          index = index+1;
      }
      
  }

  return res;
}

module.exports = {
  transform
};
