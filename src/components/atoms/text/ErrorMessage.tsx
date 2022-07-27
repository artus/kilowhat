import { StyleSheet, Text } from "react-native"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"

export const ErrorMessage: React.FC = ({ children }) => {
  return <Text style={styles.error}>{children}</Text>
}

const styles = StyleSheet.create({
  error: {
    padding: sizing.padding.small,
    color: colors.error
  }
})