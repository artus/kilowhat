import { StyleSheet, Text } from "react-native";
import { sizing } from "../../../styles/Sizing";

export const MenuEntryText: React.FC = ({ children }) => {
  return <Text style={styles.menuEntryText}>{children}</Text>
};

const styles = StyleSheet.create({
  menuEntryText: {
    fontSize: 20,
    textAlign: "center",
    padding: sizing.padding.extraSmall
  }
})