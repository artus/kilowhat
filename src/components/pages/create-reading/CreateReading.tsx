import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CreateDialForm } from "../../organisms/create-dial-form/CreateDialForm";
import { CreateReadingForm } from "../../organisms/create-reading-form/CreateReadingForm";
import { PageContainer } from "../../templates/page-container/PageContainer";
import { RootStackParamList } from "../../templates/page-container/Wrapper";

type CreateReadingProps = NativeStackScreenProps<RootStackParamList, 'CreateReading'>;

export const CreateReading: React.FC<CreateReadingProps> = ({ route }) => {

  return <PageContainer>
    <CreateReadingForm
      dial={route.params.dial}
      onReadingCreated={route.params.onReadingCreated}
    />
  </PageContainer>
}