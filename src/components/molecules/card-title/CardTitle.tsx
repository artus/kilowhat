import { StyleSheet, TouchableOpacity, View } from "react-native"
import { sizing } from "../../../styles/Sizing"
import { MenuButton } from "../../atoms/buttons/MenuButton"
import { Title } from "../../atoms/text/Title"

interface CardTitleProps {
  title: string,
  onClick?: () => void | Promise<void>,
  onTitlePress?: () => void | Promise<void>
}

export const CardTitle: React.FC<CardTitleProps> = ({
  title,
  onClick,
  onTitlePress
}: CardTitleProps) => {
  return <View style={styles.container}>
    {
      onTitlePress
        ? <TouchableOpacity
          onPress={onTitlePress}
        >
          <Title text={title} style={styles.titleStyle} />
        </TouchableOpacity>
        : <Title text={title} style={styles.titleStyle} />
    }
    {onClick && <MenuButton onClick={onClick} size={20} />}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizing.margin.small
  },
  titleStyle: {
    fontSize: 24
  }
})