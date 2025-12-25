/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
export function findUniqueToy(toy) {
  if (!toy) return '';

  const letterOcurrences = new Map();
  const letters = toy.split('');
  letters.forEach((letter) => {
    const lowercaseLetter = letter.toLocaleLowerCase();
    const letterCount = letterOcurrences.get(lowercaseLetter) ?? 0;
    letterOcurrences.set(lowercaseLetter, letterCount + 1);
  });

  const firstUnrepeatedLetter = letters.find(
    (letter) => letterOcurrences.get(letter.toLocaleLowerCase()) <= 1
  );
  return firstUnrepeatedLetter ?? '';
}
