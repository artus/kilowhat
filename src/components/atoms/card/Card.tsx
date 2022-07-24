import { StyleSheet, View } from "react-native"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"

export const Card: React.FC = ({ children }) => {
  return <View style={styles.card}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  card: {
    padding: sizing.padding.small,
    backgroundColor: colors.white,
    margin: sizing.margin.medium,
    marginTop: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius:15 
  }
})