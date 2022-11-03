import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home as HomeIcon, Heart as OrdersIcon } from 'react-native-feather';

import theme from '../config/theme';
import PizzaList from './PizzaList';
import Orders from './Orders';

const Tabs = createBottomTabNavigator();

export default function Home() {
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
    </Tabs.Navigator>
  );
}
