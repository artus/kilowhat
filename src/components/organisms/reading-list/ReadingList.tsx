import { DateTime } from "luxon"
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Dial } from "../../../domain/Dial"
import { Reading } from "../../../domain/Reading"
import { useMeterManager } from "../../../hooks/useMeterManager"
import { useNavigationManager } from "../../../hooks/useNavigationManager"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"
import { LeftMarginSpacer } from "../../atoms/spacers/LeftMarginSpacer"
import { MarginSpacer } from "../../atoms/spacers/MarginSpacer"
import { ListItem } from "../../atoms/text/ListItem"
import { ClickableIcon } from "../../molecules/clickable-icon/ClickableIcon"
import { ReadingDisplay } from "../../molecules/reading-display/ReadingDisplay"

interface ReadingListProps {
  dial: Dial,
  onReadingRemoved: () => void
}

export const ReadingList: React.FC<ReadingListProps> = ({
  dial,
  onReadingRemoved
}) => {

  const { persist } = useMeterManager();

  const removeReading = (reading: Reading) => {
    Alert.alert(
      'Remove reading?',
      `Are you sure you want to remove this reading?`,
      [
        {
          text: 'Yes', onPress: () => {
            dial.removeReading(reading);
            onReadingRemoved();
            persist();
          }
        },
        { text: 'No', style: 'cancel' }
      ]
    );
  }

  return <>
    {dial.getOrderedReadings().map((reading, index) => {
      return <ListItem key={index}>
        <View style={styles.readingListItem}>
          <Text>{reading.timestamp.toLocaleString(DateTime.DATE_SHORT)}</Text>
          <View style={styles.readingDisplayGroup}>
            <ReadingDisplay reading={reading} />
            <LeftMarginSpacer>
              <ClickableIcon
                icon="trash-outline"
                size={sizing.fonts.h2}
                color={colors.black}
                onClick={() => removeReading(reading)}
              />
            </LeftMarginSpacer>
          </View>
        </View>
      </ListItem>
    })}
    {!dial.readings.length && <MarginSpacer
      size={sizing.margin.extraSmall}
    >
      <Text style={{ alignSelf: "center" }}>No readings yet.</Text>
    </MarginSpacer>}
  </>
}

const styles = StyleSheet.create({
  readingListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  readingDisplayGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})