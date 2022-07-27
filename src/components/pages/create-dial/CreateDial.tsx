import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CreateDialForm } from "../../organisms/create-dial-form/CreateDialForm";
import { PageContainer } from "../../templates/page-container/PageContainer";
import { RootStackParamList } from "../../templates/page-container/Wrapper";

type CreateDialProps = NativeStackScreenProps<RootStackParamList, 'CreateDial'>;

export const CreateDial: React.FC<CreateDialProps> = ({ route }) => {

  return <PageContainer>
    <CreateDialForm
      meter={route.params.meter}
      onDialCreated={route.params.onDialCreated}
    />
  </PageContainer>
}