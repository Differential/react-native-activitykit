import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-nucleus-ui';
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
      <Button title="Login" size="large" onPress={() => navigation.navigate('Order')} />
    </View>
  );
};

export default Home;
