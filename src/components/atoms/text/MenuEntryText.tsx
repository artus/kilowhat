import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../../styles/Colors";
import { sizing } from "../../../styles/Sizing";

interface MenuEntryTextProps {
  color?: string,
  children: ReactNode
}

export const MenuEntryText: React.FC<MenuEntryTextProps> = ({ 
  children,
  color = colors.black
}) => {
  return <Text style={styles(color).menuEntryText}>{children}</Text>
};

const styles = (color: string) => StyleSheet.create({
  menuEntryText: {
    color,
    fontSize: 20,
    textAlign: "center",
    padding: sizing.padding.extraSmall
  }
})