export const getRecommendations = (
  transportKm: number,
  electricityUnits: number,
  foodType: string
) => {
  const recommendations: string[] = [];

  if (transportKm > 20) {
    recommendations.push(
      "Use public transport twice a week."
    );
  }

  if (electricityUnits > 200) {
    recommendations.push(
      "Reduce AC usage by 1 hour daily."
    );
  }

  if (
    foodType === "non-vegetarian"
  ) {
    recommendations.push(
      "Try one vegetarian day per week."
    );
  }

  if (
    recommendations.length === 0
  ) {
    recommendations.push(
      "Great job. Maintain your sustainable lifestyle."
    );
  }

  return recommendations;
};
