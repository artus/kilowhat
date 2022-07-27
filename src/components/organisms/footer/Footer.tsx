import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigationManager } from "../../../hooks/useNavigationManager";
import { colors } from "../../../styles/Colors";
import { sizing } from "../../../styles/Sizing";
import { CreateButton } from "../../atoms/create-button/CreateButton";
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
        icon="list-outline"
        onPress={() => { navigationManager.toUnits(); }}
      />
      <CreateButton />
      <FooterButton
        icon="list-outline"
        onPress={() => { navigationManager.toUnits(); }}
      />
    </View>
  </View>
};

const styles = StyleSheet.create({
  footerBackgroundShadow: {
    position: "absolute",
    width: "100%",
    height: 20,
    bottom: 85
  },
  footerBackground: {
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: 85,
    backgroundColor: colors.background
  },
  footer: {
    top: 25,
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