import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../styles/Colors";
import { sizing } from "../../../styles/Sizing";

export const ListItem: React.FC = ({ children }) => {
  return <View style={styles.listItem}>
    {children}
  </View>
};

const styles = StyleSheet.create({
  listItem: {
    paddingBottom: sizing.padding.small,
    margin: sizing.margin.small,
    marginTop: 0,
    borderBottomColor: colors.extraLightGray,
    borderBottomWidth: 1,
    marginBottom: sizing.margin.small
  }
});