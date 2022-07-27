import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, StyleSheet, View } from "react-native";
import { Meter } from "../../../domain/Meter"
import { showSuccessToast } from "../../../helpers/ToastHelper";
import { useMenuManager } from "../../../hooks/useMenuManager";
import { useMeterManager } from "../../../hooks/useMeterManager";
import { useNavigationManager } from "../../../hooks/useNavigationManager";
import { sizing } from "../../../styles/Sizing";
import { Card } from "../../atoms/card/Card";
import { CardTitle } from "../../molecules/card-title/CardTitle";
import { DialTitle } from "../../molecules/dial-title/DialTitle";
import { DialInfo } from "../../organisms/dial-info/DialInfo";
import { DialOverview } from "../../organisms/dial-overview/DialOverview";
import { MeterPageTitle } from "../../organisms/meter-page-title/MeterPageTitle";
import { PageContainer } from "../../templates/page-container/PageContainer";
import { RootStackParamList } from "../../templates/page-container/Wrapper";

type MeterPageProps = NativeStackScreenProps<RootStackParamList, 'MeterPage'>;

export const MeterPage: React.FC<MeterPageProps> = ({
  route
}: MeterPageProps) => {

  const meter = route.params.meter;

  return <PageContainer>
    <MeterPageTitle meter={meter} />
    {
      meter.dials.map((dial, index) => {
        return <DialOverview
          isFirst={true}
          meter={meter}
          dial={dial}
          key={dial.id}
        />
      })
    }
  </PageContainer>
}