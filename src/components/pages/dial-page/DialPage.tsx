import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "../../atoms/text/ListItem";
import { ReadingList } from "../../organisms/reading-list/ReadingList";
import { PageContainer } from "../../templates/page-container/PageContainer";
import { RootStackParamList } from "../../templates/page-container/Wrapper";

type DialPageProps = NativeStackScreenProps<RootStackParamList, 'DialPage'>;

export const DialPage: React.FC<DialPageProps> = ({ route }) => {

  const dial = route.params.dial;

  return <PageContainer>
    <ReadingList dial={dial} />
  </PageContainer>
}