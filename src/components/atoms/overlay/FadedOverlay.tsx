import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native"
import { colors } from "../../../styles/Colors";

interface FadedOverlayProps {
  onClick?: () => void | Promise<void>
}

export const FadedOverlay: React.FC<FadedOverlayProps> = ({
  onClick = () => { }
}) => {

  const fadeInAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInAnimation, {
      toValue: 0.6,
      duration: 200,
      useNativeDriver: true
    }).start();
  }, [fadeInAnimation]);

  return <Animated.View
    onTouchStart={onClick}
    style={[
      styles.fadedOverlay,
      { opacity: fadeInAnimation }
    ]}
  />
}

const styles = StyleSheet.create({
  fadedOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: colors.gray
  }
});