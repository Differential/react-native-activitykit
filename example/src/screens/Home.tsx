import {
  NavigationRouteContext,
  useNavigation,
} from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-nucleus-ui';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from './RootStackParamList';

import { useSelector, useDispatch } from 'react-redux';

import { selectMenuCategory } from '../reducers/actions';
import type { OrderState } from '../reducers/order';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categories: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },

  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

type orderScreenProp = StackNavigationProp<RootStackParamList, 'Order'>;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const result = 'Result!';
  const { menuSelection } = useSelector(
    (state: { order: OrderState }) => state.order
  );

  const selectCategory = (category: string) => {
    dispatch(selectMenuCategory(category));
  };

  const navigation = useNavigation<orderScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <Button
          title="Pizza"
          size="small"
          appearance={menuSelection === 'Pizza' ? 'primary' : 'secondary'}
          onPress={selectCategory('Pizza')}
        />
        <Button
          title="Calzones"
          size="small"
          appearance={menuSelection === 'Calzones' ? 'primary' : 'secondary'}
          onPress={selectCategory('Calzones')}
        />
      </View>
      <Text>Result: {result}</Text>
      <Button
        title="Login"
        size="large"
        onPress={() => navigation.navigate('Order')}
      />
    </View>
  );
};

export default Home;
