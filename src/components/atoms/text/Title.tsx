import { StyleSheet, Text } from "react-native"
import { sizing } from "../../../styles/Sizing"

interface TitleProps {
  text: string,
  size?: number
}

export const Title: React.FC<TitleProps> = ({
  text,
  size = 24
}: TitleProps) => {
  return <Text style={styles(size).title}>{text}</Text>
}

const styles = (size: number) => StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: sizing.margin.small
  }
})