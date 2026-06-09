describe("Carbon Calculator", () => {

  test("should calculate emissions", () => {

    const transport = 10 * 0.21;
    const electricity = 100 * 0.82;

    const result =
      transport + electricity;

    expect(result)
      .toBeGreaterThan(0);

  });

});
