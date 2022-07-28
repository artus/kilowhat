import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"

interface KeyValueProps {
  title: string,
  value: string
}

export const KeyValue: React.FC<KeyValueProps> = ({
  title,
  value
}) => {
  return <View style={styles.keyValue}>
    <Text style={styles.keyValueText}>{title}</Text>
    <Text style={styles.keyValueText}>{value}</Text>
  </View>
}

const styles = StyleSheet.create({
  keyValue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizing.padding.medium
  },
  keyValueText: {
    color: colors.gray
  }
})