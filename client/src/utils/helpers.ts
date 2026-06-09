export const formatEmission = (
  value: number
) => {
  return `${value.toFixed(2)} kg CO₂`;
};

export const getEcoRank = (
  score: number
) => {

  if (score >= 90)
    return "Platinum";

  if (score >= 75)
    return "Gold";

  if (score >= 60)
    return "Silver";

  return "Bronze";
};
