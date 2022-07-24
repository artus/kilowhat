import { StyleSheet, View } from "react-native"
import { colors } from "../../../styles/Colors";

interface FadedOverlayProps {
  onClick?: () => void | Promise<void>
}

export const FadedOverlay: React.FC<FadedOverlayProps> = ({
  onClick = () => { }
}) => {
  return <View
    onTouchStart={onClick}
    style={styles.fadedOverlay}
  />
}

const styles = StyleSheet.create({
  fadedOverlay: {
    position: 'absolute',
    opacity: 0.5,
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: colors.gray
  }
});