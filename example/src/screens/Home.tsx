import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { selectMenuCategory } from '../reducers/actions';
import { OrderState } from '../reducers/order';

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
  },

  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const result = 'Result!';
  const { menuSelection } = useSelector(
    (state: { order: OrderState }) => state.order
  );

  const selectCategory = (category: string) => {
    selectMenuCategory(category);
  };

  return (
    <View style={styles.container}>
      <View></View>
      <Text>Result: {result}</Text>
    </View>
  );
};

export default Home;
