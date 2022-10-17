import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { multiply } from 'react-native-activitykit';

import Home from './screens/Home';
import Pizza from './screens/Pizza';
import Orders from './screens/Orders';
import Profile from './screens/Profile';

const Tabs = createBottomTabNavigator();

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Orders" component={Orders} />
        <Tabs.Screen name="Profile" component={Profile} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
