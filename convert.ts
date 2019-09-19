const inputTypes = [
  { name: "centimeters", constant: 0.01 },
  { name: "milimeters", constant: 0.001 },
  { name: "km", constant: 1000 },
];
const outputTypes = [
  { name: "feet", constant: 3.28 },
  { name: "yard", constant: 1.09 },
];

type InputMeasureType = "centimeters" | "milimeters";
type OutputMeasureType = "feet" | "yard";

export function convertToMeters(
  foreignInputMeasure: number,
  measureType: InputMeasureType
) {
  const constant = inputTypes.find(type => type.name === measureType).constant;
  return foreignInputMeasure * constant;
}

export function convertToOutputMeasurement(
  inputMeters: number,
  measureType: OutputMeasureType
) {
  const constant = outputTypes.find(type => type.name === measureType).constant;
  return inputMeters * constant;
}
