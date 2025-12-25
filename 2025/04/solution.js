/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
export function decodeSantaPin(code) {
  // Code here
  const digitsCode = code.substring(1, code.length - 1).split('][');
  const pin = [];
  let lastDigit;
  for (const digitCode of digitsCode) {
    if (digitCode === '<' && !isNaN(lastDigit)) {
      pin.push(lastDigit);
      continue;
    }

    const [number, ...operations] = digitCode.split('');
    let digit = +number;
    operations.forEach((operation) => {
      if (operation === '+') digit++;
      else if (operation === '-') digit--;

      digit = (digit + 10) % 10;
    });
    lastDigit = digit;
    pin.push(digit);
  }

  if (pin.length < 4) return null;
  return pin.join('');
}
