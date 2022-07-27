import { Unit } from "../domain/Unit";
import { colors } from "../styles/Colors";

export const getChartColorForUnit = (unit: Unit) => {
  switch (unit.id) {
    case '1':
    case '2':
      return colors.charts.electricity;
    case '3':
    case '5':
    case '6':
      return colors.charts.water;
    case '7':
      return colors.charts.gas;
    default:
      return colors.charts.other;
  }
}