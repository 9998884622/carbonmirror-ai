export const predictFutureEmission = (
  currentEmission: number
) => {
  return {
    oneMonth:
      currentEmission * 30,

    sixMonths:
      currentEmission * 180,

    oneYear:
      currentEmission * 365,

    fiveYears:
      currentEmission * 1825
  };
};
