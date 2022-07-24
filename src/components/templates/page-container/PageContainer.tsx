import { ScrollView, StyleSheet, StatusBar } from "react-native";
import { colors } from "../../../styles/Colors";
import Constants from 'expo-constants'
import { sizing } from "../../../styles/Sizing";
import { TopSpacer } from "../../atoms/spacers/TopSpacer";
import { FooterMenu } from "../../molecules/menu/FooterMenu";

export const PageContainer: React.FC = ({ children }) => {
  return <ScrollView style={styles.container}>
    <TopSpacer />
    {children}
  </ScrollView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    flexDirection: 'column',
    backgroundColor: colors.background,
    paddingBottom: 25, // For the footer
  }
})