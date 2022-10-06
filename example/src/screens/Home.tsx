import {
  NavigationRouteContext,
  useNavigation,
} from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from './RootStackParamList';

import pizzas, { Pizza as PizzaType } from '../data/pizzas';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filters: {
    flexDirection: 'row',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  pizza: {
    height: 200,
    width: 200,
    backgroundColor: 'blue',
  },
});

type OrderScreenNavigationPropType = StackNavigationProp<
  RootStackParamList,
  'Order'
>;

const renderPizza = ({
  item,
  navigation,
}: {
  item: PizzaType;
  navigation: OrderScreenNavigationPropType;
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Order', { _id: item._id, title: item.title })
      }
    >
      <View style={styles.pizza}>
        <Image
          style={{ height: 250, width: 250 }}
          source={{ uri: 'https://boredhumans.b-cdn.net/pizza/1294.jpg' }}
        />
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Home = () => {
  const result = 'Result!';
  const navigation = useNavigation<OrderScreenNavigationPropType>();
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <FlatList
        data={pizzas}
        renderItem={({ item }) => renderPizza({ item, navigation })}
        numColumns={2}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Order')}>
        <Text>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
