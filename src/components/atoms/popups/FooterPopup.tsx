import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { colors } from "../../../styles/Colors";
import { sizing } from "../../../styles/Sizing";

export const FooterPopup: React.FC = ({ children }) => {

  const fadeInAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInAnimation, {
      duration: 50,
      toValue: 1,
      useNativeDriver: true
    }).start();
  }, [fadeInAnimation]);

  return <Animated.View
    style={[
      styles.container,
      { opacity: fadeInAnimation}
    ]}
  >
    {children}
  </Animated.View>
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: colors.white,
    padding: sizing.padding.medium,
    borderRadius: 25,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    bottom: 5,
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    alignSelf: 'center',
    minWidth: '70%'
  }
})