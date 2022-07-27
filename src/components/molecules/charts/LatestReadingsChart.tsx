import { Dial } from "../../../domain/Dial"
import { getChartColorForUnit } from "../../../helpers/ChartColorHelper"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"
import { LineChart } from "../../atoms/charts/LineChart"
import { TopSpacer } from "../../atoms/spacers/TopSpacer"

interface LatestReadingChartProps {
  dial: Dial
}

export const LatestReadingChart: React.FC<LatestReadingChartProps> = ({
  dial
}) => {
  return dial.readings.length > 1
    ? <>
      <TopSpacer height={sizing.padding.small} />
      <LineChart
        dataset={dial.getOrderedReadings().map(reading => reading.value).slice(-5)}
        height={75}
        backgroundColor={getChartColorForUnit(dial.unit)}
        color={colors.white}
      />
    </>
    : <></>

}