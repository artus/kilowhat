import { Dial } from "../../../domain/Dial"
import { Meter } from "../../../domain/Meter"
import { Card } from "../../atoms/card/Card"
import { DialOverviewTitle } from "../../molecules/dial-overview-title/DialOverviewTitle"
import { MarginSpacer } from "../../atoms/spacers/MarginSpacer"
import { sizing } from "../../../styles/Sizing"
import { LatestReadingDisplay } from "../../molecules/reading-display/LatestReadingDisplay"
import { LatestReadingChart } from "../../molecules/charts/LatestReadingsChart"
import { TopSpacer } from "../../atoms/spacers/TopSpacer"

interface DialOverviewProps {
  dial: Dial,
  meter: Meter,
  isFirst?: boolean
}

export const DialOverview: React.FC<DialOverviewProps> = ({
  dial,
  meter,
  isFirst = false
}) => {

  return <Card>
    <MarginSpacer
      size={sizing.margin.small}
      bottom={false}
    >
      <DialOverviewTitle
        isFirst={isFirst}
        dial={dial}
        meter={meter}
      />
    </MarginSpacer>
    <MarginSpacer
      size={sizing.margin.extraSmall}
    >
      <LatestReadingDisplay dial={dial} />
      <LatestReadingChart dial={dial} />
    </MarginSpacer>
    <TopSpacer />
  </Card>
}