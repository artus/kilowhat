import { TouchableOpacity } from "react-native";
import { Icon } from "../../atoms/icon/Icon";

interface ClickableIconProps {
  icon: string
  size: number,
  color: string,
  onClick: () => void | Promise<void>
}

export const ClickableIcon: React.FC<ClickableIconProps> = ({
  icon,
  size,
  color,
  onClick
}) => {
  return <TouchableOpacity onPress={onClick}>
    <Icon
      icon={icon}
      size={size}
      color={color}
    />
  </TouchableOpacity>
}