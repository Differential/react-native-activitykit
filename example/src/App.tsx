import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import type { Order as OrderType, Pizza as PizzaType } from './config/types';
import Home from './screens/Home';
import Pizza from './screens/Pizza';
import Order from './screens/Order';
import Cart from './screens/Cart';
import store from './store';

export type RootStackParamList = {
  Home: undefined;
  Order: { order: OrderType };
  Pizza: { pizza: PizzaType };
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pizza"
            component={Pizza}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Order"
            component={Order}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
