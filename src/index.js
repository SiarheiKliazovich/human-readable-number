const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const uptotwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const tens = [ '','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const hundred = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

module.exports = function toReadable (x) {
  let num1 = x.toString().slice(0,1);
  let num2 = x.toString().slice(1,2);
  let num3 = x.toString().slice(2)
  if( x == 0 ){
    return "zero"
  }
  if( x < 10 ) { 
    return ones[num1]
  }
  if( 10 <= x && x < 20 ) {
  return uptotwenty[num2]
  }
  if( 20 <= x && x < 100 ) {
  if( num2 == 0 ) return tens[num1];
  return tens[num1] + " " + ones[num2]
  }
  if(100 <= x && x < 1000) {
  if ( num2 == 0 && num3 == 0 ) return hundred[num1];
  if ( num2 == 0 ) return hundred[num1] + " " + ones[num3];
  if ( num2 == 1 ) return hundred[num1] + " " + uptotwenty[num3];
  if ( num3 == 0 ) return hundred[num1] + " " + tens[num2];
  return hundred[num1] + " " + tens[num2] + " " + ones[num3]
  }
}
