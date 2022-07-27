import { Text } from "react-native";
import { Dial } from "../../../domain/Dial"
import { MarginSpacer } from "../../atoms/spacers/MarginSpacer";

interface ReadingComparison {
  newValue?: number,
  dial: Dial
}

export const ReadingComparison: React.FC<ReadingComparison> = ({
  newValue,
  dial
}) => {

  const comparisonText = (() => {
    const latestReading = dial.getLatestReading();
    if (newValue && latestReading) {
      const diff = newValue - latestReading.value;
      if (diff > 0) {
        return `New reading increases usage with ${diff.toFixed(2)} ${dial.unit.notation}`;
      } else if (diff < 0) {
        return `New reading decreases usage with ${Math.abs(diff).toFixed(2)} ${dial.unit.notation}`;
      }
    }
  })();


  return !!comparisonText
    ? <MarginSpacer>
      <Text>{comparisonText}</Text>
    </MarginSpacer>
    : <></>
}