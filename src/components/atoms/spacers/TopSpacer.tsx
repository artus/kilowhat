import { View } from "react-native"

interface TopSpacerProps {
  height?: number
}

export const TopSpacer: React.FC<TopSpacerProps> = ({
  height = 25
}: TopSpacerProps) => {
  return <View 
  style={{
    width: '100%',
    height
  }}
  />
}