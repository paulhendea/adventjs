/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  // Code here
  const digitsCode = code.substring(1, code.length - 1).split('][')
  const pin = []
  let lastDigit
  for (const digitCode of digitsCode) {
    if (digitCode === '<' && !isNaN(lastDigit)) {
      pin.push(lastDigit)
      continue
    }

    const [number, ...operations] = digitCode.split('')
    let digit = +number
    operations.forEach(operation => {
      if (operation === '+') digit++
      else if (operation === '-') digit--

      if (digit === 10) digit = 0
      else if (digit === -1) digit = 9
    })
    lastDigit = digit
    pin.push(digit)
  }

  if (pin.length < 4) return null
  return pin.join('')
}

const result = decodeSantaPin('[1++][2-][3+][<]')
console.log(result) // expected: "3144"