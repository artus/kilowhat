import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"

interface InputLabelProps {
  text: string,
  isError?: boolean
}

export const InputLabel: React.FC<InputLabelProps> = ({ 
  text ,
  isError = false
}: InputLabelProps) => {
  return <View>
    <Text style={styles(isError).inputLabel}>{text}</Text>
  </View>
}

const styles = (isError = false) => StyleSheet.create({
  inputLabel: {
    fontSize: 10,
    margin: sizing.margin.small,
    marginBottom: 0,
    padding: 0,
    color: isError ? colors.error : "black"
  }
})