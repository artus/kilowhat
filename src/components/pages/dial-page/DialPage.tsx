import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DateTime } from "luxon";
import { useMemo, useState } from "react";
import { useNavigationManager } from "../../../hooks/useNavigationManager";
import { TopSpacer } from "../../atoms/spacers/TopSpacer";
import { DialPageTitle } from "../../organisms/dial-page-title/DialPageTitle";
import { ReadingList } from "../../organisms/reading-list/ReadingList";
import { PageContainer } from "../../templates/page-container/PageContainer";
import { RootStackParamList } from "../../templates/page-container/Wrapper";

type DialPageProps = NativeStackScreenProps<RootStackParamList, 'DialPage'>;

export const DialPage: React.FC<DialPageProps> = ({ route }) => {

  const { toDial } = useNavigationManager();
  const { meter, dial } = route.params;
  const [lastUpdate, setLastUpdate] = useState(DateTime.now());

  return <PageContainer>
    <DialPageTitle
      dial={dial}
      meter={meter}
      afterCreateReading={() => toDial(meter, dial)}
    />
    <TopSpacer />
    <ReadingList
      dial={dial}
      onReadingRemoved={() => setLastUpdate(DateTime.now())}
    />
  </PageContainer>
}