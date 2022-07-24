import { StyleSheet, View } from "react-native";
import { colors } from "../../../styles/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigationManager } from "../../../hooks/useNavigationManager";

export const CreateButton: React.FC = () => {

  const navigationManager = useNavigationManager();

  return <View style={styles.createButtonContainer}>
    <View style={styles.createButtonBackground} />
    <View
      onTouchStart={navigationManager.onButtonPress}
      style={styles.createButton}
    >
      <Ionicons
        name={navigationManager.buttonIcon as any}
        size={40}
        color={colors.background}
      />
    </View>
  </View>
}

const styles = StyleSheet.create({
  createButtonContainer: {
    position: 'relative',
    width: 48,
    height: 48,
  },
  createButtonBackground: {
    position: "absolute",
    width: 70,
    height: 70,
    left: -11,
    backgroundColor: colors.background,
    borderRadius: 50,
    bottom: 11
  },
  createButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.footerCreateButton,
    borderRadius: 50,
    width: 48,
    height: 48,
    bottom: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  createButtonText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: "center",
    color: colors.text,
    fontSize: 38,
    marginTop: 0,
    width: "100%"
  }
})