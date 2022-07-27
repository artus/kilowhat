import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { useNavigationManager } from "../../../hooks/useNavigationManager";
import { colors } from "../../../styles/Colors";
import { FooterButton } from "../../atoms/buttons/FooterButton";

export const Footer: React.FC = () => {

  const navigationManager = useNavigationManager();

  return <View style={styles.footerBackground}>
    <LinearGradient
      colors={["transparent", colors.background]}
      style={styles.footerBackgroundShadow}
    />
    <View style={styles.footer}>
      <FooterButton
        icon="add-circle-outline"
        onPress={() => { navigationManager.toCreateMeter(); }}
        text="Add meter"
      />
      <FooterButton
        icon="list-outline"
        onPress={() => { navigationManager.toUnits(); }}
        text="Units"
      />
    </View>
  </View>
};

const styles = StyleSheet.create({
  footerBackgroundShadow: {
    position: "absolute",
    width: "100%",
    height: 20,
    bottom: 60 
  },
  footerBackground: {
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: 60,
    backgroundColor: colors.background
  },
  footer: {
    top: 5,
    position: "absolute",
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.footerBackground,
    width: "100%",
    height: 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  }
})