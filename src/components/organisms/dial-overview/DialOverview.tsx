import { StyleSheet, Text, View } from "react-native"
import { Dial } from "../../../domain/Dial"
import { Meter } from "../../../domain/Meter"
import { Card } from "../../atoms/card/Card"
import { ReadingDisplay } from "../../molecules/reading-display/ReadingDisplay"
import { DialOverviewTitle } from "../../molecules/dial-overview-title/DialOverviewTitle"
import { MarginSpacer } from "../../atoms/spacers/MarginSpacer"
import { sizing } from "../../../styles/Sizing"
import { TopMarginSpacer } from "../../atoms/spacers/TopMarginSpacer"

interface DialOverviewProps {
  dial: Dial,
  meter: Meter
}

export const DialOverview: React.FC<DialOverviewProps> = ({
  dial,
  meter
}) => {

  const latestReadingDisplay = dial.hasReadings()
    ? <ReadingDisplay reading={dial.getLatestReading()} />
    : <MarginSpacer size={sizing.margin.extraSmall}><Text>No readings yet.</Text></MarginSpacer>;

  return <Card>
    <TopMarginSpacer size={sizing.margin.extraSmall}>
      <DialOverviewTitle
        dial={dial}
        meter={meter}
      />
    </TopMarginSpacer>
    <MarginSpacer>{latestReadingDisplay}</MarginSpacer>
  </Card>
}