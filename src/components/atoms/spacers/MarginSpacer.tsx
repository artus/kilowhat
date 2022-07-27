import { ReactNode } from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { sizing } from "../../../styles/Sizing"

interface MarginSpacerProps {
  children: ReactNode,
  size?: number,
  top?: boolean,
  bottom?: boolean,
  left?: boolean,
  right?: boolean,
  style?: StyleProp<ViewStyle>
}

export const MarginSpacer: React.FC<MarginSpacerProps> = ({
  children,
  size = sizing.margin.small,
  top = true,
  bottom = true,
  left = true,
  right = true,
  style
}) => {

  const innerStyle = !!style
    ? [ style, styles(size, top, bottom, left, right).marginSpacer ]
    : styles(size, top, bottom, left, right).marginSpacer;

  return <View style={innerStyle}>
    {children}
  </View>
}

const styles = (
  size: number,
  top: boolean,
  bottom: boolean,
  left: boolean,
  right: boolean
) => StyleSheet.create({
  marginSpacer: {
    marginTop: top ? size : 0,
    marginBottom: bottom ? size : 0,
    marginLeft: left ? size : 0,
    marginRight: right ? size : 0
  }
});