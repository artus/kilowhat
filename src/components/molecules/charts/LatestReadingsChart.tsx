import { Dial } from "../../../domain/Dial"
import { ReadingChart } from "./ReadingsChart"

interface LatestReadingChartProps {
  dial: Dial,
  onPress?: () => void | Promise<void>
}

export const LatestReadingChart: React.FC<LatestReadingChartProps> = ({
  dial,
  onPress
}) => {
  return <ReadingChart
    dial={dial}
    limit={5}
    text={'Last 5 readings'}
    onPress={onPress}
  />
}