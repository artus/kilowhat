import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigationManager } from "../../../hooks/useNavigationManager";
import { useRefresh } from "../../../hooks/useRefresh";
import { DialOverview } from "../../organisms/dial-overview/DialOverview";
import { MeterPageTitle } from "../../organisms/meter-page-title/MeterPageTitle";
import { PageContainer } from "../../templates/page-container/PageContainer";
import { RootStackParamList } from "../../templates/page-container/Wrapper";

type MeterPageProps = NativeStackScreenProps<RootStackParamList, 'MeterPage'>;

export const MeterPage: React.FC<MeterPageProps> = ({
  route
}: MeterPageProps) => {

  const { toMeter } = useNavigationManager();
  const meter = useRefresh(route.params.meter);

  return <PageContainer>
    <MeterPageTitle
      meter={meter}
    />
    {
      meter.dials.map((dial, index) => {
        return <DialOverview
          meter={meter}
          isFirst={true}
          dial={dial}
          key={dial.id}
          onReadingCreated={() => toMeter(meter)}
        />
      })
    }
  </PageContainer>
}