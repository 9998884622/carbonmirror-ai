export const calculateScore = (
  emission: number
) => {
  if (emission <= 10) return 95;

  if (emission <= 20) return 80;

  if (emission <= 30) return 70;

  if (emission <= 40) return 60;

  return 40;
};
