/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
export function matchGloves(gloves) {
  const matchingGloves = [];
  const reviewedGloves = new Map();
  gloves.forEach((glove) => {
    const { hand, color } = glove;
    const glovesInfo = reviewedGloves.get(color);
    const opositePair = hand === 'L' ? 'R' : 'L';
    if (glovesInfo?.[opositePair] > 0) {
      reviewedGloves.set(color, {
        ...glovesInfo,
        [opositePair]: (glovesInfo?.[opositePair] ?? 0) - 1,
      });
      matchingGloves.push(color);
    } else {
      reviewedGloves.set(color, {
        ...glovesInfo,
        [hand]: (glovesInfo?.[hand] ?? 0) + 1,
      });
    }
  });

  return matchingGloves;
}
