import { useState } from "react";
import { View, TextInput, StyleSheet  } from "react-native";
import { colors } from "../../../styles/Colors";
import { sizing } from "../../../styles/Sizing";

interface NumberInputFieldProps {
  isError?: boolean,
  value: number | undefined,
  onChange: (newValue: string) => void
}

export const NumberInputField: React.FC<NumberInputFieldProps> = ({
  isError = false,
  value,
  onChange
}: NumberInputFieldProps) => {

  const [innerValue, setInnerValue] = useState<string>(value ? `${value}` : "");

  const onChangeInnerValue = (newValue: string) => {
    setInnerValue(newValue);
    onChange(newValue);
  }

  return <View>
    <TextInput
      style={styles(isError).textInput}
      value={innerValue}
      keyboardType="numeric"
      onChangeText={onChangeInnerValue}
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