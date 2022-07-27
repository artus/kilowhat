import { Children, ReactNode, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"

interface ButtonProps {
  children: ReactNode,
  onClick: () => void | Promise<void>,
  onError?: (error: Error) => void | Promise<void>,
  isEnabled?: boolean,
  color?: string
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  onError = () => { },
  isEnabled = true,
  children,
  color = colors.buttons.green
}: ButtonProps) => {

  const [isLoading, setIsLoading] = useState(false);

  const onPress = async () => {
    if (isEnabled) {
      setIsLoading(true);
      try {
        await onClick();
      } catch (error) {
        await onError(error as Error);
      }
      setIsLoading(false);
    }
  }

  return <View
    style={styles(color, isEnabled).button}
    onTouchStart={onPress}
  >
    {children}
  </View>
}

const styles = (color: string, isEnabled: boolean) => StyleSheet.create({
  button: {
    flex: 1,
    padding: sizing.padding.medium,
    margin: sizing.margin.small,
    backgroundColor: color,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    opacity: isEnabled ? 1 : 0.5
  }
})