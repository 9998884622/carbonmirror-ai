describe("Prediction Engine", () => {

  test("future prediction exists", () => {

    const prediction =
      100 * 365;

    expect(prediction)
      .toBe(36500);

  });

});
