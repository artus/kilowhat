import { StyleSheet, Text, View } from "react-native"
import { sizing } from "../../../styles/Sizing"
import { TextInputField } from "../../atoms/input/TextInputField"

interface SearchBarProps {
  onChange: (value: string) => void,
  value: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onChange,
  value
}) => {
  return <View style={styles.searchBar}>
    <TextInputField
      onChange={onChange}
      placeholder="🔎"
      value={value}
    />
  </View>
}

const styles = StyleSheet.create({
  searchBar: {
    padding: sizing.padding.medium,
    paddingTop: 0
  }
})