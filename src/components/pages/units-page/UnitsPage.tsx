import { Text } from "react-native";
import { useUnitManager } from "../../../hooks/useUnitManager"
import { sizing } from "../../../styles/Sizing";
import { ListItem } from "../../atoms/text/ListItem";
import { PageContainer } from "../../templates/page-container/PageContainer"

export const UnitsPage: React.FC = () => {

  const { units } = useUnitManager();

  return <PageContainer>
    {units.map((unit, index) => {
      return <ListItem key={index}>
        <Text style={{
          fontSize: sizing.fonts.h3
        }}>{`${unit.name} (${unit.notation})`}</Text>
      </ListItem>
    })}

  </PageContainer>

}