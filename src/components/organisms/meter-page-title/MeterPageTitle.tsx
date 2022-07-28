import { Alert, StyleSheet, Text, View } from "react-native";
import { Meter } from "../../../domain/Meter"
import { showSuccessToast } from "../../../helpers/ToastHelper";
import { useMenuManager } from "../../../hooks/useMenuManager";
import { useMeterManager } from "../../../hooks/useMeterManager";
import { useNavigationManager } from "../../../hooks/useNavigationManager";
import { sizing } from "../../../styles/Sizing";
import { PaddingSpacer } from "../../atoms/spacers/PaddingSpacer";
import { TopSpacer } from "../../atoms/spacers/TopSpacer";
import { PageTitle } from "../../molecules/page-title/PageTitle";

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
      text: "Add dial",
      onClick: () => navigationManager.toCreateDial(meter, () => {
        navigationManager.toMeter(meter);
      })
    },
    {
      text: "Edit meter",
      onClick: () => navigationManager.toUpdateMeter(meter, navigationManager.toMeter)
    },
    {
      text: "Remove meter",
      onClick: removeMeter
    }
  ];

  return <View>
    <PageTitle
      title={meter.name}
      onMenuPress={() => menuManager.show(menuEntries)}
    />
    {!!meter.description && <>
      <PaddingSpacer
        size={sizing.padding.large}
      >
        <Text>{meter.description}</Text>
      </PaddingSpacer>
    </>}
    <TopSpacer />
  </View>
}