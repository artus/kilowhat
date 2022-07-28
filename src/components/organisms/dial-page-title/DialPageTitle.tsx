import { Alert, StyleSheet, Text, View } from "react-native";
import { Dial } from "../../../domain/Dial";
import { Meter } from "../../../domain/Meter";
import { showSuccessToast } from "../../../helpers/ToastHelper";
import { useMenuManager } from "../../../hooks/useMenuManager";
import { useMeterManager } from "../../../hooks/useMeterManager";
import { useNavigationManager } from "../../../hooks/useNavigationManager";
import { sizing } from "../../../styles/Sizing";
import { PaddingSpacer } from "../../atoms/spacers/PaddingSpacer";
import { PageTitle } from "../../molecules/page-title/PageTitle";

interface DialPageTitleProps {
  dial: Dial,
  meter: Meter,
  afterCreateReading: () => void
}

export const DialPageTitle: React.FC<DialPageTitleProps> = ({
  dial,
  meter,
  afterCreateReading
}) => {
  const navigationManager = useNavigationManager();
  const menuManager = useMenuManager();
  const { persist } = useMeterManager();

  const removeDial = () => {
    Alert.alert(
      `Remove dial ${dial.name}`,
      'Are you sure you want to remove this dial?',
      [
        {
          text: 'Remove', style: 'destructive', onPress: () => {
            meter.removeDial(dial);
            persist();
            showSuccessToast(`Removed dial '${dial.name}'`);
            navigationManager.toMeter(meter);
          }
        },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  }

  const menuEntries = [
    { text: 'Add reading', onClick: () => { navigationManager.toCreateReading(dial, afterCreateReading); }},
    { text: "Remove dial", onClick: removeDial}
  ];

  return <View>
    <PageTitle
      title={dial.name}
      onMenuPress={() => menuManager.show(menuEntries)}
    />
  </View>
}

const styles = StyleSheet.create({
  meterPageTitle: {
    paddingLeft: sizing.padding.medium,
    paddingRight: sizing.padding.medium,
    marginBottom: sizing.margin.medium
  }
});