import { Dial } from "../../../domain/Dial"
import { Meter } from "../../../domain/Meter"
import { Card } from "../../atoms/card/Card"
import { DialOverviewTitle } from "../../molecules/dial-overview-title/DialOverviewTitle"
import { sizing } from "../../../styles/Sizing"
import { LatestReadingDisplay } from "../../molecules/reading-display/LatestReadingDisplay"
import { ReadingChart } from "../../molecules/charts/ReadingsChart"
import { DialStats } from "../../molecules/dial-stats/DialStats"

interface DialOverviewProps {
  meter: Meter,
  dial: Dial,
  isFirst?: boolean,
  onReadingCreated: () => void
}

export const DialOverview: React.FC<DialOverviewProps> = ({
  meter,
  dial,
  isFirst = false,
  onReadingCreated
}) => {

  return <Card style={{ padding: sizing.padding.medium }}>
    <DialOverviewTitle
      meter={meter}
      isFirst={isFirst}
      dial={dial}
      onReadingCreated={onReadingCreated}
    />
    <LatestReadingDisplay dial={dial} />
    <DialStats dial={dial} />
    <ReadingChart
      dial={dial}
      text={`All readings`}
    />
  </Card>
}