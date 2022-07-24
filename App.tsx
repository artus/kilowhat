import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SingletonHooksContainer } from 'react-singleton-hook';
import { Wrapper } from './src/components/templates/page-container/Wrapper';

export default function App() {
  return <>
    <NavigationContainer>
      <Wrapper />
      <SingletonHooksContainer />
    </NavigationContainer>
  </>
}