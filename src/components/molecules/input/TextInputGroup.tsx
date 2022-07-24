import { StyleSheet, Text } from "react-native"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"
import { InputLabel } from "../../atoms/input/InputLabel"
import { TextInputField } from "../../atoms/input/TextInputField"

interface TextInputGroupProps {
  labelText: string,
  lines?: number,
  error?: string,
  value: string | undefined,
  onChange: (newValue: string) => void,
  placeholder?: string,
  isPassword?: boolean
}

export const TextInputGroup: React.FC<TextInputGroupProps> = ({
  labelText,
  lines,
  error,
  value,
  onChange,
  placeholder,
  isPassword
}: TextInputGroupProps) => {
  return <>
    <InputLabel
      text={labelText}
      isError={!!error}
    />
    <TextInputField
      lines={lines}
      isError={!!error}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isPassword={isPassword}
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