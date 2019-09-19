test("calc", () => {
  const input2 = 420;
  const mType = "yard";
  const output2 = convertToOutputMeasurement(
    convertToMeters(input2, "milimeters"),
    "yard"
  );
  expect(output2).toMatchSnapshot();
});
