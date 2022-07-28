import { ReactNode } from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { sizing } from "../../../styles/Sizing"

interface PaddingSpacerProps {
  size?: string | number,
  left?: string | number,
  right?: string | number,
  top?: string | number,
  bottom?: string | number,
  style?: StyleProp<ViewStyle>,
  children: ReactNode
}

export const PaddingSpacer: React.FC<PaddingSpacerProps> = ({
  size = sizing.padding.small,
  left = size,
  right = size,
  top = size,
  bottom = size,
  style,
  children
}) => {

  const innerStyles = !!style
    ? [style, styles(left, right, top, bottom).paddingSpacer]
    : styles(left, right, top, bottom).paddingSpacer;

  return <View
    style={innerStyles}
  >
    {children}
  </View>
}

const styles = (
  left: number | string,
  right: number | string,
  top: number | string ,
  bottom: number | string
) => StyleSheet.create({
  paddingSpacer: {
    paddingLeft: left,
    paddingRight: right,
    paddingTop: top,
    paddingBottom: bottom
  }
});