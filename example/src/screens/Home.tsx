import {
  NavigationRouteContext,
  useNavigation,
} from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from './RootStackParamList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

type orderScreenProp = StackNavigationProp<RootStackParamList, 'Order'>;

const Home = () => {
  const result = 'Result!';
  const navigation = useNavigation<orderScreenProp>();
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Order')}>
        <Text>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
