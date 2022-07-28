import { StyleSheet, View } from "react-native"
import { Dial } from "../../../domain/Dial"
import { Meter } from "../../../domain/Meter"
import { useNavigationManager } from "../../../hooks/useNavigationManager"
import { sizing } from "../../../styles/Sizing"
import { LatestReadingChart } from "../../molecules/charts/LatestReadingsChart"
import { DialOverviewTitle } from "../../molecules/dial-overview-title/DialOverviewTitle"
import { LatestReadingDisplay } from "../../molecules/reading-display/LatestReadingDisplay"

interface DialInfoProps {
  meter: Meter,
  dial: Dial,
  isLast?: boolean,
  isFirst?: boolean,
  onReadingCreated: () => void
}

export const DialInfo: React.FC<DialInfoProps> = ({
  dial,
  isLast = false,
  isFirst = false,
  meter,
  onReadingCreated
}: DialInfoProps) => {

  const { toMeter } = useNavigationManager();

  return <View style={styles(isLast).dialInfo}>
    <DialOverviewTitle
      meter={meter}
      dial={dial}
      isFirst={isFirst}
      onReadingCreated={onReadingCreated}
    />
    <LatestReadingDisplay dial={dial} />
    <LatestReadingChart
      onPress={() => toMeter(meter)}
      dial={dial}
    />
  </ View>
}

const styles = (isLast: boolean) => StyleSheet.create({
  dialInfo: {
    marginBottom: isLast ? 0 : sizing.margin.small
  }
});