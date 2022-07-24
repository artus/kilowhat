import { View, TextInput, StyleSheet  } from "react-native";
import { colors } from "../../../styles/Colors";
import { sizing } from "../../../styles/Sizing";

interface TextInputFieldProps {
  lines?: number,
  isError?: boolean,
  value: string | undefined,
  onChange: (newValue: string) => void,
  placeholder?: string,
  isPassword?: boolean
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  lines = 1,
  isError = false,
  value,
  onChange,
  placeholder,
  isPassword
}: TextInputFieldProps) => {

  return <View>
    <TextInput
      numberOfLines={lines}
      multiline={lines > 1}
      style={styles(isError).textInput}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      secureTextEntry={isPassword}
    />
  </View>
};

const styles = (isError = false) => StyleSheet.create({
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: isError ? colors.error : colors.textInput,
    padding: 0,
    paddingTop: sizing.padding.small,
    margin: sizing.margin.small,
    marginBottom: sizing.margin.small,
    marginTop: 0,
    color: isError ? colors.error : "black"
  }
})