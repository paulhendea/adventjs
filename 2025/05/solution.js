/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
export function timeUntilTakeOff(fromTime, takeOffTime) {
  const parseElfTime = (elfDateTime) => {
    const [elfDate, elfTime] = elfDateTime.replace(' NP', '').split('@');
    const [year, month, day] = elfDate.split('*');
    const [hour, min, sec] = elfTime.split('|');
    return Date.UTC(+year, +month - 1, +day, +hour, +min, +sec);
  };

  const fromTimestamp = parseElfTime(fromTime);
  const takeOffTimestamp = parseElfTime(takeOffTime);
  const msDifference = takeOffTimestamp - fromTimestamp;
  return Math.floor(msDifference / 1000);
}
