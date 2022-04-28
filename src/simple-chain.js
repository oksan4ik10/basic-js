const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : '',
  getLength() {
      return this.chain.split('~~').length;
  },
  addLink(value) {
    value = String(value);

    if (this.chain){
        this.chain += '~~';
    }
    if(value==='undefined') {
        this.chain += (`( )`);
        return this;
    }
  
    this.chain += (`( ${value} )`);
    return this;


  },
  removeLink(position) {

      let arrChain = this.chain.split('~~');
      if((typeof(arrChain[position-1])==='undefined')){
              this.chain = '';
              throw new Error(`You can't remove incorrect link!`);
              return this;
      };
      position--;

      arrChain.splice(position,1);
      this.chain = arrChain.join('~~');
      return this;
      
      

  },
  reverseChain() {
      let arrChain = this.chain.split('~~');
      arrChain.reverse();
      this.chain = arrChain.join('~~');
      return this;

   
  },
  finishChain() {
      let resChain = this.chain;
      this.chain = '';
      return resChain;

  }
};

module.exports = {
  chainMaker
};
