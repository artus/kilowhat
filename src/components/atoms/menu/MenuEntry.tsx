import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"
import { MenuEntryText } from "../text/MenuEntryText"

interface MenuEntryProps {
  text: string,
  onClick: () => void | Promise<void>,
  isLast: boolean,
  color?: string
}

export const MenuEntry: React.FC<MenuEntryProps> = ({
  text,
  onClick,
  isLast,
  color
}: MenuEntryProps) => {
  return <TouchableOpacity
    style={styles(isLast).menuEntry}
    onPress={onClick}
  >
    <MenuEntryText color={color}>{text}</MenuEntryText>
  </TouchableOpacity>
}

const styles = (isLast: boolean) => StyleSheet.create({
  menuEntry: {
    paddingLeft: sizing.padding.medium,
    paddingRight: sizing.padding.medium,
    paddingBottom: sizing.padding.small,
    borderBottomColor: colors.extraLightGray,
    borderBottomWidth: isLast ? 0 : 1
  }
})