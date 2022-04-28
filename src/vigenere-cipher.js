const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(val = true){
      this.val = val;
      this.lang = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  encrypt(message, key) {
      if((typeof(message) === 'undefined')||(typeof(key)==='undefined')) throw new Error('Incorrect arguments!');
      const code = this.getArrKey(key); //индексы кода шифрования
      const strCode = this.getArrKey(message); //индексы кода строки для шифрования

      let res = '';
      let indexCode = 0;
      for (let index = 0; index < strCode.length; index++) {
          if(typeof(strCode[index])==='string'){
              res+=strCode[index];
              continue;
          }
          if (indexCode > code.length -1) indexCode = 0;
 
          let indexLetter = (code[indexCode]+strCode[index])%26;
          const letter = this.lang[indexLetter];
          

          res+=letter;
          indexCode++;
      }

      if (this.val) return res;
      return this.getReverse(res);
  }
  decrypt(message, key) {
      if((typeof(message) === 'undefined')||(typeof(key)==='undefined'))
      throw new Error('Incorrect arguments!');
      const code = this.getArrKey(key); //индексы кода шифрования
      const strCode = this.getArrKey(message); //индексы кода строки для шифрования

      let res = '';
      let indexCode = 0;
      let indexLetter;
      for (let index = 0; index < strCode.length; index++) {
          if(typeof(strCode[index])==='string'){
              res+=strCode[index];
              continue;
          }
          if (indexCode > code.length -1) indexCode = 0;

          if(strCode[index]-code[indexCode]>=0) {indexLetter = Math.abs((strCode[index]-code[indexCode]))%26
          }else{
              indexLetter = 26 - Math.abs((strCode[index]-code[indexCode]));
          }

          res+=this.lang[indexLetter];;
          indexCode++;
      }
      if (this.val) return res;
      return this.getReverse(res);
      
  }
  //индексы кода букв
  getArrKey(key){
      let res = [];

      for (let i = 0; i < key.length; i++) {
          let count = 0;
          for (let index = 0; index < this.lang.length; index++) {
             
              if(this.lang[index] === key[i].toUpperCase()){
                  res.push(index);
                  break;
              } 
              count++;
              if(count === 26){
                  res.push(key[i]);
              }
              
          }
          
      }

      return res;
  }

  //реверс строки
  getReverse(str){
      
  
      return str.split("").reverse().join("");

  }

}

module.exports = {
  VigenereCipheringMachine
};
