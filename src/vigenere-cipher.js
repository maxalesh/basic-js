const {NotImplementedError} = require('../extensions/index.js');

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
  encrypt(message, keyword) {
    const errorMessage = new Error('Incorrect arguments!');
    if (message === undefined || keyword === undefined) {
      throw errorMessage;
    }

    let encText = [];
    let index = 0;
    const text = message.toUpperCase();
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const key = keyword.toUpperCase();
    for (let i = 0; i < text.length; i += 1) {
      let letter = text[i];
      if (alpha.indexOf(letter) !== -1) {
        let keyCharIndex = alpha.indexOf(key[index % key.length]);
        let letterInd = alpha.indexOf(letter);
        let encryptedCharIndex = (letterInd + keyCharIndex) % alpha.length;
        encText.push(alpha[encryptedCharIndex]);
        index += 1;
      } else {
        encText.push(letter);
      }
    }
    return encText.join('');
  }

  decrypt(ciphertext, keyword) {
    const errorMessage = new Error('Incorrect arguments!');
    if (ciphertext === undefined || keyword === undefined) {
      throw errorMessage;
    }
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const input = ciphertext.toUpperCase();
    const key = keyword.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length]);
        const decryptedCharIndex = (charIndex - keyCharIndex + alphabet.length) % alphabet.length;

        result += alphabet[decryptedCharIndex];
        keyIndex++;
      } else {
        result += char;
      }
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
