export const calculateCarbonFootprint = (
  transportKm: number,
  electricityUnits: number,
  waterUsage: number,
  wasteKg: number,
  foodType: string
) => {
  const transportEmission = transportKm * 0.21;

  const electricityEmission =
    electricityUnits * 0.82;

  const waterEmission =
    waterUsage * 0.0003;

  const wasteEmission =
    wasteKg * 0.57;

  let foodEmission = 0;

  switch (foodType) {
    case "vegetarian":
      foodEmission = 1.5;
      break;

    case "non-vegetarian":
      foodEmission = 4.5;
      break;

    case "vegan":
      foodEmission = 1;
      break;

    default:
      foodEmission = 2;
  }

  const totalEmission =
    transportEmission +
    electricityEmission +
    waterEmission +
    wasteEmission +
    foodEmission;

  return totalEmission;
};
