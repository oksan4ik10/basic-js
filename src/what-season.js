const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

 
  if(!date) return 'Unable to determine the time of year!';
    
  const season = ['spring', 'summer', 'autumn', 'winter'];


  try {
 
 
      const month = date.getMonth();
      const year = date.getYear();

      if((month===2) || (month === 3) || (month === 4)){
          return season[0];
      } else if((month===5) || (month === 6) || (month === 7)){
          return season[1];
      } else if((month===8) || (month === 9) || (month === 10)){
          return season[2];
      }else if((month===11) || (month === 0) || (month === 1)){
          return season[3];
      }
   }
   catch (e){
      throw new Error("Invalid date!");
       
   }
}

module.exports = {
  getSeason
};
