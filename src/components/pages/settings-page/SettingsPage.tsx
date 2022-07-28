import { Text } from "react-native"
import { Meter } from "../../../domain/Meter"
import { generateTestData } from "../../../helpers/DataGenerator"
import { useMeterManager } from "../../../hooks/useMeterManager"
import { Button } from "../../atoms/buttons/Button"
import { PageContainer } from "../../templates/page-container/PageContainer"

export const SettingsPage: React.FC = () => {

  const meterManager = useMeterManager();

  const slowlyRemoveData = (remainingData: Meter[]) => {
    if (remainingData.length > 0) {
      meterManager.removeMeter(remainingData.pop()!);
      setTimeout(function() { slowlyRemoveData(remainingData) }.bind(this), 200);
    } else {
      alert('Removed all data');
    }
  }

  const generateData = () => {
    const testData = generateTestData();
    meterManager.addMeters(testData);
  }

  const clearData = () => {
    const allMeters = meterManager.meters;
    slowlyRemoveData(allMeters);
  }

  return <PageContainer>
    <Button
      onClick={generateData}
      children={<Text>Generate test data</Text>}
    />
    <Button
      onClick={clearData}
      children={<Text>Clear data</Text>}
    />
  </PageContainer>
}