import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Meter } from "../../../domain/Meter"
import { showSuccessToast } from "../../../helpers/ToastHelper"
import { useMenuManager } from "../../../hooks/useMenuManager"
import { useMeterManager } from "../../../hooks/useMeterManager"
import { useNavigationManager } from "../../../hooks/useNavigationManager"
import { useRefresh } from "../../../hooks/useRefresh"
import { colors } from "../../../styles/Colors"
import { sizing } from "../../../styles/Sizing"
import { Card } from "../../atoms/card/Card"
import { CardTitle } from "../../molecules/card-title/CardTitle"
import { DialInfo } from "../dial-info/DialInfo"

interface MeterCardProps {
  meter: Meter
};

export const MeterCard: React.FC<MeterCardProps> = ({
  meter
}: MeterCardProps) => {

  const innerMeter = useRefresh(meter);

  const menuManager = useMenuManager();
  const meterManager = useMeterManager();
  const navigationManager = useNavigationManager();

  const removeMeter = () => {
    Alert.alert(
      `Remove meter ${innerMeter.name}`,
      'Are you sure you want to remove this meter?',
      [
        {
          text: 'Remove', style: 'destructive', onPress: () => {
            meterManager.removeMeter(innerMeter);
            showSuccessToast(`Removed meter '${innerMeter.name}'`);
          }
        },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  }

  const menuEntries = [
    { text: "Add dial", onClick: () => navigationManager.toCreateDial(innerMeter, () =>  navigationManager.toRoot()) },
    { text: "Edit meter", onClick: () => navigationManager.toUpdateMeter(innerMeter, () => navigationManager.back()) },
    { text: "Remove meter", onClick: removeMeter, color: colors.red  }
  ]

  return <Card style={styles.meterCard}>
    <CardTitle
      title={innerMeter.name}
      onClick={() => { menuManager.show(menuEntries) }}
      onTitlePress={() => { navigationManager.toMeter(innerMeter); }}
    />
    {
      innerMeter.dials.length
        ? innerMeter.dials.map((dial, index) => <DialInfo
          isFirst={index === 0}
          meter={innerMeter}
          dial={dial}
          key={dial.id}
          isLast={index === innerMeter.dials.length - 1}
          onReadingCreated={() => navigationManager.toRoot()}
        />)
        : <Text>No dials added yet.</Text>
    }
  </Card>
}

const styles = StyleSheet.create({
  meterCard: {
    padding: sizing.padding.medium
  }
});