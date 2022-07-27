import { StyleSheet, Text, View } from "react-native"
import { Reading } from "../../../domain/Reading"
import { sizing } from "../../../styles/Sizing";
import { ReadingCharacter } from "../../atoms/text/ReadingCharacter";

interface ReadingTextProps {
  reading: Reading
}

export const ReadingDisplay: React.FC<ReadingTextProps> = ({ reading }) => {

  const characters = (reading.value + "").split('');

  return <View style={styles.container}>
    {characters.map((character, index) => {
      return <ReadingCharacter
        key={index}
        isFirst={index === 0}
        isLast={index === characters.length - 1}
        character={character}
      />
    })}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});