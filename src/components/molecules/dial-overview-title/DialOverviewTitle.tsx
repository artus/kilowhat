import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Dial } from "../../../domain/Dial"
import { DialTitle } from "../dial-title/DialTitle"
import Ionicons from "@expo/vector-icons/Ionicons";
import { sizing } from "../../../styles/Sizing";
import { colors } from "../../../styles/Colors";
import { useNavigationManager } from "../../../hooks/useNavigationManager";
import { Meter } from "../../../domain/Meter";

interface DialOverviewTitleProps {
  dial: Dial,
  meter: Meter
}

export const DialOverviewTitle: React.FC<DialOverviewTitleProps> = ({
  dial,
  meter
}) => {

  const navigationManager = useNavigationManager();

  return <View style={styles.dialOverviewTitle}>
    <DialTitle
      dial={dial}
      onTitlePress={() => { navigationManager.toDial(dial); }}
    />
    <TouchableOpacity
      onPress={() => navigationManager.toCreateReading(meter, dial)}
    >
      <Ionicons
        name="add-circle-outline"
        size={sizing.fonts.h1}
        color={colors.lightBlack}
      />
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  dialOverviewTitle: {
    marginLeft: sizing.margin.small,
    marginRight: sizing.margin.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})