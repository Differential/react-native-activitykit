import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { multiply } from 'react-native-activitykit';

import Home from './screens/Home';
import Pizza from './screens/Pizza';

const Stack = createNativeStackNavigator();

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pizza" component={Pizza} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
