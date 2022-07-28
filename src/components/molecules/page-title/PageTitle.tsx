import { StyleSheet, View } from "react-native";
import { sizing } from "../../../styles/Sizing";
import { CardTitle } from "../../molecules/card-title/CardTitle";

interface PageTitleProps {
  title: string,
  onMenuPress: () => void
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  onMenuPress
}) => {

  return <View style={styles.pageTitle}>
    <CardTitle
      title={title}
      onClick={onMenuPress}
    />
  </View>
}

const styles = StyleSheet.create({
  pageTitle: {
    paddingLeft: sizing.padding.medium,
    paddingRight: sizing.padding.medium
  }
});