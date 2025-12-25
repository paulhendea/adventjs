/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
export function elfBattle(elf1, elf2) {
  // [attacker][defender]
  const damagePoints = {
    // Attack ('A')
    AA: 1,
    AB: 0,
    AF: 1,

    // Block ('B')
    BA: 0,
    BB: 0,
    BF: 0,

    // Fury ('F')
    FA: 2,
    FB: 2,
    FF: 2,
  };

  const rounds = Math.max(elf1.length, elf2.length);
  let elf1HP = 3;
  let elf2HP = 3;
  for (let i = 0; i < rounds; i++) {
    const elf1Move = elf1[i];
    const elf2Move = elf2[i];

    elf1HP -= damagePoints[elf2Move + elf1Move];
    elf2HP -= damagePoints[elf1Move + elf2Move];

    // HP check
    if (elf1HP <= 0 || elf2HP <= 0) break;
  }

  if ((elf1HP <= 0 && elf2HP <= 0) || elf1HP === elf2HP) {
    return 0; // draw
  } else if (elf1HP > elf2HP) {
    return 1; // elf 1 wins
  } else {
    return 2; // elf 2 wins
  }
}
