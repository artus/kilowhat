import { StyleSheet, View } from "react-native"
import { Dial } from "../../../domain/Dial"
import { sizing } from "../../../styles/Sizing"
import { DialTitle } from "../../molecules/dial-title/DialTitle"

interface DialInfoProps {
  dial: Dial,
  isLast?: boolean
}

export const DialInfo: React.FC<DialInfoProps> = ({
  dial,
  isLast = false
}: DialInfoProps) => {
  return <View style={styles(isLast).dialInfo}>
    <DialTitle dial={dial} />
  </ View>
}

const styles = (isLast: boolean) => StyleSheet.create({
  dialInfo: {
    marginBottom: isLast ? 0 : sizing.margin.small
  }
});