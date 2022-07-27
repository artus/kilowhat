import { useMemo, useState } from "react";
import { Text, View } from "react-native";
import { useMeterManager } from "../../../hooks/useMeterManager";
import { SearchBar } from "../../molecules/search-bar/SearchBar";
import { MeterCard } from "../../organisms/meter-card/MeterCard";
import { PageContainer } from "../../templates/page-container/PageContainer";

export const Home: React.FC = () => {

  const { meters } = useMeterManager();

  const [searchInput, setSearchInput] = useState('');

  const visibleMeters = useMemo(() => {
    if (!!searchInput) {
      return meters.filter(meter => {
        return meter.name.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0
          || meter.description.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0
      });
    } else {
      return meters;
    }
  }, [searchInput, meters]);

  return <PageContainer>
    <SearchBar
      onChange={setSearchInput}
      value={searchInput}
    />
    {
      meters.length
        ? visibleMeters.map((meter, index) => {
          return <MeterCard meter={meter} key={index} />
        })
        : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No meters added yet.</Text>
        </View>
    }
  </PageContainer>
};