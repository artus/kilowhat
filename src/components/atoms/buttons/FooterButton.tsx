import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../styles/Colors";
import { sizing } from "../../../styles/Sizing";

interface FooterButtonProps {
  onPress: () => void,
  icon: string,
  text: string
}

export const FooterButton: React.FC<FooterButtonProps> = ({
  onPress,
  icon,
  text
}) => {
  return <TouchableOpacity
        onPress={onPress}
        style={styles.footerButton}
      >
        <Ionicons
          name={icon as any}
          size={sizing.fonts.h1}
          color={'white'}
        />
        <Text style={styles.footerButtonText}>{text}</Text>
      </TouchableOpacity>
}

const styles = StyleSheet.create({
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerButtonText: {
    color: colors.white,
    marginLeft: sizing.margin.extraSmall
  }
})