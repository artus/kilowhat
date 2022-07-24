import { ActivityIndicator } from "react-native"

interface LoaderProps {
  readonly color?: string
}


export const Loader: React.FC<LoaderProps> = ({
  color = 'green'
}) => {
  return <ActivityIndicator
    color={color}
  />
}