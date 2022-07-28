import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UpdateMeterForm } from "../../organisms/update-meter-form/UpdateMeterForm"
import { PageContainer } from "../../templates/page-container/PageContainer"
import { RootStackParamList } from "../../templates/page-container/Wrapper";

type UpdateMeterProps = NativeStackScreenProps<RootStackParamList, 'UpdateMeter'>;

export const UpdateMeter: React.FC<UpdateMeterProps> = ({
  route
}: UpdateMeterProps) => {

  return <PageContainer>
    <UpdateMeterForm
      meter={route.params.meter}
      onMeterUpdated={route.params.onMeterUpdated}
    />
  </PageContainer>
}