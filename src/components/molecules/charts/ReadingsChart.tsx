import { StyleSheet, Text } from "react-native"
import { Dial } from "../../../domain/Dial"
import { getChartColorForUnit } from "../../../helpers/ChartColorHelper"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"
import { LineChart } from "../../atoms/charts/LineChart"
import { TopSpacer } from "../../atoms/spacers/TopSpacer"
import { ConditionalTouchable } from "../../atoms/touchables/ConditionalTouchable"

interface ReadingChartProps {
  dial: Dial,
  limit?: number,
  text?: string,
  onPress?: () => void
}

export const ReadingChart: React.FC<ReadingChartProps> = ({
  dial,
  limit,
  text,
  onPress
}) => {

  const dataset = !!limit
    ? dial.getOrderedReadings().map(reading => reading.value).slice(limit * -1)
    : dial.getOrderedReadings().map(reading => reading.value);

  return dial.readings.length > 1
    ? <>
      <TopSpacer height={sizing.padding.small} />
      <ConditionalTouchable onPress={onPress}>
        <LineChart
          dataset={dataset}
          height={75}
          backgroundColor={getChartColorForUnit(dial.unit)}
          color={colors.white}
        />
      </ConditionalTouchable>
      {!!text && <Text style={styles.chartText}>{text}</Text>}
    </>
    : <></>
}

const styles = StyleSheet.create({
  chartText: {
    marginTop: sizing.margin.extraSmall,
    color: colors.gray,
    fontSize: sizing.fonts.subText,
    alignSelf: 'center'
  }
})