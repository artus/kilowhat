import Ionicons from "@expo/vector-icons/Ionicons";

interface IconProps {
  icon: string
  size: number,
  color: string
}

export const Icon: React.FC<IconProps> = ({
  icon,
  size,
  color
}) => {
  return <Ionicons
    name={icon as any}
    size={size}
    color={color}
  />
}