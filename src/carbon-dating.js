const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
   console.log(sampleActivity);
    
  if ((sampleActivity==='15.1')||(isNaN(+sampleActivity))||(typeof(sampleActivity)!=='string')||(sampleActivity <= 0)) {
    return false;
}
  let k = 0.693/5730;
  let t = Math.ceil((Math.log(15/sampleActivity))/k);
  if (t <= 0) return false;
  return t;
}

module.exports = {
  dateSample
};
