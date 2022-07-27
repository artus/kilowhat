import { StyleProp, StyleSheet, Text, TextStyle } from "react-native"
import { sizing } from "../../../styles/Sizing"

interface TitleProps {
  text: string,
  size?: number,
  style?: StyleProp<TextStyle>
}

export const Title: React.FC<TitleProps> = ({
  text,
  size = sizing.fonts.h1,
  style
}: TitleProps) => {
  return <Text
    style={
      style ? style : styles(size).title
    }
  >
    {text}
  </Text>
}

const styles = (size: number) => StyleSheet.create({
  title: {
    fontSize: size,
    marginBottom: sizing.margin.small
  }
})