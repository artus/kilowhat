import { NavigationContainer } from '@react-navigation/native';
import { SingletonHooksContainer } from 'react-singleton-hook';
import { Wrapper } from './src/components/templates/page-container/Wrapper';
import Toast from 'react-native-toast-message';

export default function App() {
  return <>
    <NavigationContainer>
      <Wrapper />
      <SingletonHooksContainer />
    </NavigationContainer>
    <Toast />
  </>
}