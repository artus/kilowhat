import { Text } from "react-native";
import { Dial } from "../../../domain/Dial";
import { sizing } from "../../../styles/Sizing";
import { MarginSpacer } from "../../atoms/spacers/MarginSpacer";
import { TopMarginSpacer } from "../../atoms/spacers/TopMarginSpacer";
import { ReadingDisplay } from "./ReadingDisplay";

interface LatestReadingDisplayProps {
  dial: Dial
}

export const LatestReadingDisplay: React.FC<LatestReadingDisplayProps> = ({
  dial
}) => {
  const latestReadingDisplay = dial.hasReadings()
    ? <ReadingDisplay reading={dial.getLatestReading()} />
    : <Text>No readings yet.</Text>

  return <MarginSpacer
    left={false}
    right={false}
  >
    {latestReadingDisplay}
  </MarginSpacer>
}