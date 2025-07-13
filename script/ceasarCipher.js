const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

export default function ceasarCipher(str, key) {
  let result = '';

  for (let char of str) {
    const isUpper = char === char.toUpperCase();
    const lowerChar = char.toLowerCase();

    if (LETTERS.includes(lowerChar)) {
      let index = LETTERS.indexOf(lowerChar);
      let shiftedIndex = (index + key) % 26;
      if (shiftedIndex < 0) shiftedIndex += 26;
      let shiftedChar = LETTERS[shiftedIndex];
      result += isUpper ? shiftedChar.toUpperCase() : shiftedChar;
    } else {
      result += char;
    }
  }

  return result;
}