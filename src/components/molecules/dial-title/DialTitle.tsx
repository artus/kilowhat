import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Dial } from "../../../domain/Dial"
import Ionicons from "@expo/vector-icons/Ionicons";
import { Title } from "../../atoms/text/Title";
import { sizing } from "../../../styles/Sizing";
import { colors } from "../../../styles/Colors";

interface DialTitleProps {
  dial: Dial,
  onTitlePress?: () => void
}

export const DialTitle: React.FC<DialTitleProps> = ({
  dial,
  onTitlePress
}: DialTitleProps) => {

  const innerJSX = <View style={styles.dialTitle}>
    <Ionicons
      name="speedometer-outline"
      size={sizing.fonts.h2}
      style={styles.dialTitleIcon}
    />
    <Title
      text={dial.name}
      size={sizing.fonts.h2}
      style={styles.dialTitleText}
    />
  </View>

  return !!onTitlePress
    ? <TouchableOpacity onPress={onTitlePress}>{innerJSX}</TouchableOpacity>
    : innerJSX;
}

const styles = StyleSheet.create({
  dialTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dialTitleIcon: {
    color: colors.lightBlack,
    marginRight: sizing.margin.extraSmall
  },
  dialTitleText: {
    color: colors.lightBlack,
    fontSize: sizing.fonts.h3
  }
});