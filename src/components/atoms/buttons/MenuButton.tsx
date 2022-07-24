import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

interface MenuButtonProps {
  onClick?: () => void | Promise<void>,
  size?: number
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  onClick = () => { },
  size = 14
}: MenuButtonProps) => {
  return <TouchableOpacity
    onPress={onClick}
  >
    <Ionicons
      name="ellipsis-vertical"
      size={size}
    />
  </TouchableOpacity>
}