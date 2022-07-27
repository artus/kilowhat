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
  meter: Meter,
  isFirst?: boolean
}

export const DialOverviewTitle: React.FC<DialOverviewTitleProps> = ({
  dial,
  meter,
  isFirst = false
}) => {

  const navigationManager = useNavigationManager();

  return <View style={styles(isFirst).dialOverviewTitle}>
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

const styles = (isFirst: boolean) => StyleSheet.create({
  dialOverviewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: isFirst ? 0 : sizing.margin.small
  }
})