import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { sizing } from "../../../styles/Sizing";

interface FooterButtonProps {
  onPress: () => void,
  icon: string
}

export const FooterButton: React.FC<FooterButtonProps> = ({
  onPress,
  icon
}) => {
  return <TouchableOpacity
        onPress={onPress}
      >
        <Ionicons
          name={icon as any}
          size={sizing.fonts.h1}
          color={'white'}
        />
      </TouchableOpacity>

}