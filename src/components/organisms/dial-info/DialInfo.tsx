import { StyleSheet, Text, View } from "react-native"
import { Dial } from "../../../domain/Dial"
import { Meter } from "../../../domain/Meter"
import { sizing } from "../../../styles/Sizing"
import { LatestReadingChart } from "../../molecules/charts/LatestReadingsChart"
import { DialOverviewTitle } from "../../molecules/dial-overview-title/DialOverviewTitle"
import { LatestReadingDisplay } from "../../molecules/reading-display/LatestReadingDisplay"

interface DialInfoProps {
  meter: Meter,
  dial: Dial,
  isLast?: boolean,
  isFirst?: boolean
}

export const DialInfo: React.FC<DialInfoProps> = ({
  meter,
  dial,
  isLast = false,
  isFirst = false
}: DialInfoProps) => {

  return <View style={styles(isLast).dialInfo}>
    <DialOverviewTitle dial={dial} meter={meter} isFirst={isFirst} />
    <LatestReadingDisplay dial={dial} />
    <LatestReadingChart dial={dial} />
  </ View>
}

const styles = (isLast: boolean) => StyleSheet.create({
  dialInfo: {
    marginBottom: isLast ? 0 : sizing.margin.small
  }
});