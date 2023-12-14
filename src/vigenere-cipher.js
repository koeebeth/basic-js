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
const encryptLetter = (key, letter) => {
  letter = letter.toUpperCase();
  key = key.toUpperCase();

  let charCode = 'A'.charCodeAt(0) + ((key.charCodeAt(0) - 'A'.charCodeAt(0)) + (letter.charCodeAt(0) - 'A'.charCodeAt(0))) % 26;
  return String.fromCharCode(charCode);
}

const decryptLetter = (key, letter) => {
  letter = letter.toUpperCase();
  key = key.toUpperCase();

  let charCode = 'A'.charCodeAt(0) + ((letter.charCodeAt(0) - 'A'.charCodeAt(0)) - (key.charCodeAt(0) - 'A'.charCodeAt(0)) + 26) % 26;
  return String.fromCharCode(charCode);
}


const isAlpha = (letter) => {
  letter = letter.toUpperCase();
  return letter.charCodeAt(0) >= 'A'.charCodeAt(0) && letter.charCodeAt(0) <= 'Z'.charCodeAt(0);
}

const encryptFn = (str, key) => {
  if(str === undefined || key === undefined) {
    throw new Error('Incorrect arguments!');
  }
  let encrypted = '';
  let indx = 0;
  for (let i = 0; i < str.length; i++) {
    if (isAlpha(str[i])) {
      encrypted += encryptLetter(key[indx % key.length], str[i]);
      indx++;
    }
    else {
      encrypted += str[i];
    }
  }
  return encrypted;
}

const decryptFn = (str, key) => {
  if(str === undefined || key === undefined) {
    throw new Error('Incorrect arguments!');
  }
  let decrypted = '';
  let indx = 0;
  for (let i = 0; i < str.length; i++) {
    if (isAlpha(str[i])) {
      decrypted += decryptLetter(key[indx % key.length], str[i]);
      indx++;
    }
    else {
      decrypted += str[i];
    }
  }
  return decrypted;
}

class VigenereCipheringMachine {
  constructor(isDirect) {
    if (!(isDirect === true || isDirect === undefined)) {
      this.encrypt = (str, key) => encryptFn(str, key).split('').reverse().join('');
      this.decrypt = (str, key) => decryptFn(str, key).split('').reverse().join('');
    }
  }
  encrypt(str, key) {
    return encryptFn(str, key);
    // remove line with error and write your code here
  }
  decrypt(str, key) {
    return decryptFn(str, key);
  }
}

module.exports = {
  VigenereCipheringMachine
};
