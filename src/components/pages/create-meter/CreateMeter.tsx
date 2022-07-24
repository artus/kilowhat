import { ScrollView, Text, View } from "react-native"
import { Card } from "../../atoms/card/Card"
import { CreateMeterForm } from "../../organisms/create-meter-form/CreateMeterForm"
import { PageContainer } from "../../templates/page-container/PageContainer"

export const CreateMeter: React.FC = () => {
  return <PageContainer>
    <CreateMeterForm />
  </PageContainer>
}