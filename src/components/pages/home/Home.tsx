import { Text, View } from "react-native";
import { Meter } from "../../../domain/Meter";
import { useMeterManager } from "../../../hooks/useMeterManager";
import { TopSpacer } from "../../atoms/spacers/TopSpacer";
import { MeterCard } from "../../organisms/meter-card/MeterCard";
import { PageContainer } from "../../templates/page-container/PageContainer";

export const Home: React.FC = () => {

  const { meters } = useMeterManager();

  return <PageContainer>
    {
      meters.length
        ? meters.map((meter, index) => {
          return <MeterCard meter={meter} key={index} />
        })
        : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No meters added yet.</Text>
        </View>
    }
  </PageContainer>
};