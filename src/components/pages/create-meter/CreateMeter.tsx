import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CreateMeterForm } from "../../organisms/create-meter-form/CreateMeterForm"
import { PageContainer } from "../../templates/page-container/PageContainer"
import { RootStackParamList } from "../../templates/page-container/Wrapper";

type CreateMeterProps = NativeStackScreenProps<RootStackParamList, 'CreateMeter'>;

export const CreateMeter: React.FC<CreateMeterProps> = ({
  route
}) => {
  return <PageContainer>
    <CreateMeterForm 
      onMeterCreated={route.params.onMeterCreated}
    />
  </PageContainer>
}