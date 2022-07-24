import { StyleSheet, View } from "react-native"
import { MenuButton } from "../../atoms/buttons/MenuButton"
import { Title } from "../../atoms/text/Title"

interface CardTitleProps {
  title: string,
  onClick?: () => void | Promise<void>
}

export const CardTitle: React.FC<CardTitleProps> = ({
  title,
  onClick
}: CardTitleProps) => {
  return <View style={styles.container}>
    <Title text={title} size={24} />
    { onClick && <MenuButton onClick={onClick} size={20} /> }
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})