import { Alert, StyleSheet, Text, View } from "react-native"
import { Meter } from "../../../domain/Meter"
import { showSuccessToast } from "../../../helpers/ToastHelper"
import { useMenuManager } from "../../../hooks/useMenuManager"
import { useMeterManager } from "../../../hooks/useMeterManager"
import { useNavigationManager } from "../../../hooks/useNavigationManager"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"
import { Card } from "../../atoms/card/Card"
import { LineChart } from "../../atoms/charts/LineChart"
import { MarginSpacer } from "../../atoms/spacers/MarginSpacer"
import { PaddingSpacer } from "../../atoms/spacers/PaddingSpacer"
import { TopSpacer } from "../../atoms/spacers/TopSpacer"
import { CardTitle } from "../../molecules/card-title/CardTitle"
import { DialInfo } from "../dial-info/DialInfo"

interface MeterCardProps {
  meter: Meter
};

export const MeterCard: React.FC<MeterCardProps> = ({
  meter
}: MeterCardProps) => {

  const menuManager = useMenuManager();
  const meterManager = useMeterManager();
  const navigationManager = useNavigationManager();

  const removeMeter = () => {
    Alert.alert(
      `Remove meter ${meter.name}`,
      'Are you sure you want to remove this meter?',
      [
        {
          text: 'Remove', style: 'destructive', onPress: () => {
            meterManager.removeMeter(meter);
            showSuccessToast(`Removed meter '${meter.name}'`);
          }
        },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  }

  const menuEntries = [
    { text: "Add dial", onClick: () => navigationManager.toCreateDial(meter) },
    { text: "Edit meter", onClick: () => navigationManager.toUpdateMeter(meter) },
    { text: "Remove meter", onClick: removeMeter }
  ]

  return <Card>
    <View style={styles.meterCard}>
      <CardTitle
        title={meter.name}
        onClick={() => { menuManager.show(menuEntries) }}
        onTitlePress={() => { navigationManager.toMeter(meter); }}
      />
      {
        meter.dials.length
          ? meter.dials.map((dial, index) => <DialInfo
            isFirst={index === 0}
            meter={meter}
            dial={dial}
            key={dial.id}
            isLast={index === meter.dials.length - 1}
          />)
          : <Text>No dials added yet.</Text>
      }
      <TopSpacer />
    </View>
  </Card>
}

const styles = StyleSheet.create({
  meterCard: {
    padding: sizing.padding.small
  }
});