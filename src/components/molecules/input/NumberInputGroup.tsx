import { StyleSheet, Text } from "react-native"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"
import { InputLabel } from "../../atoms/input/InputLabel"
import { NumberInputField } from "../../atoms/input/NumberInputField"

interface NumberInputGroupProps {
  labelText: string,
  error?: string,
  value: number | undefined,
  onChange: (newValue: string) => void,
}

export const NumberInputGroup: React.FC<NumberInputGroupProps> = ({
  labelText,
  error,
  value,
  onChange,
}) => {
  return <>
    <InputLabel
      text={labelText}
      isError={!!error}
    />
    <NumberInputField
      isError={!!error}
      value={value}
      onChange={onChange}
    />
    {
      !!error && <Text style={styles.errorMessage}>{error}</Text>
    }
  </>
}

const styles = StyleSheet.create({
  errorMessage: {
    color: colors.error,
    fontSize: 14,
    margin: sizing.margin.small,
    marginBottom: 0,
    marginTop: 0,
    padding: 0,
  }
});