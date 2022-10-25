import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

type Topping = {
  _id: string;
  name: string;
  price: number;
};

type CartItem = {
  quantity: number;
  description: string;
  toppings: Topping[];
};

export default function Home() {
  const [result, setResult] = React.useState<number | undefined>();
  const [cart, setCart] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

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
