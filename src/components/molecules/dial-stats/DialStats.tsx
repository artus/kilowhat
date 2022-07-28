import { DateTime } from "luxon"
import { StyleSheet, View } from "react-native"
import { Dial } from "../../../domain/Dial"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"
import { TopSpacer } from "../../atoms/spacers/TopSpacer"
import { KeyValue } from "../../atoms/text/KeyValue"

interface DialStatsProps {
  dial: Dial
}

export const DialStats: React.FC<DialStatsProps> = ({
  dial
}) => {

  return dial.readings.length > 1
    ? <View style={styles.dialStats}>
      <KeyValue
        title="First reading"
        value={dial.getEarliestReading().value + ` ${dial.unit.notation}`}
      />
      <KeyValue
        title="Tracking since"
        value={dial.getEarliestReading().timestamp.toLocaleString(DateTime.DATE_SHORT)}
      />
      <KeyValue
        title="Total consumption"
        value={dial.getConsumptionSinceFirstReading().toFixed(2) + ` ${dial.unit.notation}`}
      />
      <KeyValue
        title="Average per day"
        value={dial.getDailyAverageConsumption().toFixed(2) + ` ${dial.unit.notation}`}
      />
      <KeyValue
        title="Average per reading"
        value={dial.getAveragePerReading().toFixed(2) + `${dial.unit.notation}`}
      />
      <KeyValue
        title="N° of readings"
        value={dial.readings.length + ""}
      />
    </View>
    : <></>
}

const styles = StyleSheet.create({
  dialStats: {
    marginTop: sizing.margin.small,
    marginBottom: sizing.margin.small,
    backgroundColor: colors.extraLightGray,
    padding: sizing.padding.medium,
    paddingBottom: 0,
    borderRadius: 15
  }
})