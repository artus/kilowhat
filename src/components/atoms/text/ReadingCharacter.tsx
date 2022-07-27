import { StyleProp, StyleSheet, Text, TextStyle } from "react-native"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"

interface ReadingCharacterProps {
  isFirst: boolean,
  isLast: boolean,
  character: string
}

export const ReadingCharacter: React.FC<ReadingCharacterProps> = ({
  isFirst,
  isLast,
  character
}) => {

  const requiredStyles: StyleProp<TextStyle>[] = [styles.character];

  if (isFirst) {
    requiredStyles.push(styles.first);
  }

  if (isLast) {
    requiredStyles.push(styles.last)
  }

  return <Text style={requiredStyles}>{character}</Text>

}

const styles = StyleSheet.create({
  character: {
    padding: sizing.padding.extraSmall,
    borderWidth: 1,
    borderColor: colors.black,
    borderRightWidth: 0
  },
  first: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  last: {
    borderRightWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
})