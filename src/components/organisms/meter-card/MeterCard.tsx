import { Alert, StyleSheet, Text, View } from "react-native"
import { Meter } from "../../../domain/Meter"
import { useMenuManager } from "../../../hooks/useMenuManager"
import { sizing } from "../../../styles/Sizing"
import { Card } from "../../atoms/card/Card"
import { Title } from "../../atoms/text/Title"
import { CardTitle } from "../../molecules/card-title/CardTitle"

interface MeterCardProps {
  meter: Meter
};

export const MeterCard: React.FC<MeterCardProps> = ({
  meter
}: MeterCardProps) => {

  const menuManager = useMenuManager();

  const removeMeter = () => {
    Alert.alert(
      `Remove meter ${meter.name}`, 
      'Are you sure you want to remove this meter?',
      [
        { text: 'Remove', style: 'destructive', onPress: () => { alert('remove'); }},
        { text: 'Cancel', style: 'cancel'}
      ]
      )
  }

  const menuEntries = [
    { text: "Add dial", onClick: () => alert('reee') },
    { text: "Remove meter", onClick: removeMeter }
  ]

  return <Card>
    <View style={styles.meterCard}>
      <CardTitle
        title={meter.name}
        onClick={() => { menuManager.show(menuEntries) }}
      />
      {
        meter.dials.length
          ? <Text>dials added, but no component yet.</Text>
          : <Text>No dials added yet.</Text>
      }
    </View>
  </Card>
}

const styles = StyleSheet.create({
  meterCard: {
    padding: sizing.padding.small
  }
})