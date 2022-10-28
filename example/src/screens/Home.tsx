import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { requestActivity, endActivity } from 'react-native-activitykit'

import { multiply } from 'react-native-activitykit';
import {
  Home as HomeIcon,
  Heart as OrdersIcon,
  User as ProfileIcon,
} from 'react-native-feather';

import theme from '../config/theme';
import PizzaList from './PizzaList';
import Orders from './Orders';
import Profile from './Profile';

const Tabs = createBottomTabNavigator();

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);


  function handleRequest() {
    console.log("Requesting Live Activity")
    requestActivity()
  }

  function handleEnd() {
    console.log("Ending Live Activity")
    endActivity()
  }
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Menu"
        component={PizzaList}
        options={() => ({
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarActiveTintColor: theme.colors.saucy,
          tabBarInactiveTintColor: 'gray',
        })}
      />
      <Tabs.Screen
        name="Orders"
        component={Orders}
        options={() => ({
          tabBarIcon: ({ color }) => <OrdersIcon color={color} />,
          tabBarActiveTintColor: theme.colors.saucy,
          tabBarInactiveTintColor: 'gray',
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
          tabBarActiveTintColor: theme.colors.saucy,
          tabBarInactiveTintColor: 'gray',
        })}
      />
    </Tabs.Navigator>
  );
}
