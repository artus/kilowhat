import { StyleSheet, View } from "react-native";
import { colors } from "../../../styles/Colors";
import { sizing } from "../../../styles/Sizing";

export const FooterPopup: React.FC = ({ children }) => {
  return <View style={styles.container}>
    {children}
  </View>
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: colors.white,
    padding: sizing.padding.medium,
    bottom: 5,
    borderRadius: 25,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    alignSelf: 'center',
    minWidth: '70%'
  }
})