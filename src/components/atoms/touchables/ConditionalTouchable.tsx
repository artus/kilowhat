import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

interface ConditionalTouchableProps {
  onPress?: () => void | Promise<void>,
  children: ReactNode
}

export const ConditionalTouchable: React.FC<ConditionalTouchableProps> = ({
  onPress,
  children
}) => {

  return !!onPress
    ? <TouchableOpacity
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
    : <>{children}</>
}