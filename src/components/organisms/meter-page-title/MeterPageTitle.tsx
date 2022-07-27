import { Alert, StyleSheet, Text, View } from "react-native";
import { Meter } from "../../../domain/Meter"
import { showSuccessToast } from "../../../helpers/ToastHelper";
import { useMenuManager } from "../../../hooks/useMenuManager";
import { useMeterManager } from "../../../hooks/useMeterManager";
import { useNavigationManager } from "../../../hooks/useNavigationManager";
import { sizing } from "../../../styles/Sizing";
import { PaddingSpacer } from "../../atoms/spacers/PaddingSpacer";
import { TopSpacer } from "../../atoms/spacers/TopSpacer";
import { CardTitle } from "../../molecules/card-title/CardTitle";

interface MeterPageTitleProps {
  meter: Meter
}

export const MeterPageTitle: React.FC<MeterPageTitleProps> = ({
  meter
}) => {
  const meterManager = useMeterManager();
  const navigationManager = useNavigationManager();
  const menuManager = useMenuManager();

  const removeMeter = () => {
    Alert.alert(
      `Remove meter ${meter.name}`,
      'Are you sure you want to remove this meter?',
      [
        {
          text: 'Remove', style: 'destructive', onPress: () => {
            meterManager.removeMeter(meter);
            showSuccessToast(`Removed meter '${meter.name}'`);
            navigationManager.toRoot();
          }
        },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  }

  const menuEntries = [
    {
      text: "Add dial", onClick: () => navigationManager.toCreateDial(meter, () => {
        navigationManager.toMeter(meter);
      })
    },
    { text: "Edit meter", onClick: () => navigationManager.toUpdateMeter(meter) },
    { text: "Remove meter", onClick: removeMeter }
  ];

  return <View style={styles.meterPageTitle}>
    <CardTitle
      title={meter.name}
      onClick={() => menuManager.show(menuEntries)}
    />
    {!!meter.description && <>
      <PaddingSpacer>
        <Text>{meter.description}</Text>
      </PaddingSpacer>
    </>}
  </View>
}

const styles = StyleSheet.create({
  meterPageTitle: {
    paddingLeft: sizing.padding.medium,
    paddingRight: sizing.padding.medium,
    marginBottom: sizing.margin.medium
  }
});