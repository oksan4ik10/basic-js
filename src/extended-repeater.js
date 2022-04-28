const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if(typeof(str)!=='string') str = String(str);
  let res = '';
  if((typeof(options.addition)!=='undefined')&&(typeof(options.addition)!=='string')) options.addition = String(options.addition);

  if(!options.separator) options.separator = '+';
  if(!options.additionSeparator) options.additionSeparator = '|';
  const count = !options.repeatTimes ? 1 : options.repeatTimes;
  const countAddition = !options.additionRepeatTimes ? 1 : options.additionRepeatTimes;

  for (let i = 0; i < count; i++) {
      let resAddition = ''; 
     for (let j = 0; j < countAddition; j++) {
         if(!options.addition) break;
         if(countAddition-1 !== j) resAddition+= options.addition + options.additionSeparator; 
         else resAddition+= options.addition;
         
     }
     res+=str+resAddition;
     if(count-1 !== i) res+= options.separator; 
      
  }


  return res;
}

module.exports = {
  repeater
};
