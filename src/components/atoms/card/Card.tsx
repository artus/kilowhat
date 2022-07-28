import { ReactNode } from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"

interface CardProps {
  style?: StyleProp<ViewStyle>,
  children: ReactNode
}

export const Card: React.FC<CardProps> = ({ 
  children,
  style
}) => {

  const innerStyles = !!style
    ? [ styles.card, style ]
    : styles.card

  return <View style={innerStyles}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  card: {
    padding: sizing.padding.small,
    backgroundColor: colors.white,
    margin: sizing.margin.medium,
    marginTop: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius:15 
  }
})