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
  pizzaBox: {
    padding: 20,
    // backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pizzaImage: {
    borderRadius: 8,
    height: 120,
    width: 120,
  },
  pizzaTitle: {
    marginTop: 8,
  },
  listContainer: {
    marginHorizontal: 20,
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
      onPress={() => navigation.navigate('Order', { pizza: item })}
    >
      <View style={styles.pizzaBox}>
        <Image
          style={{ height: 120, width: 120 }}
          source={{ uri: item.image }}
        />
        <Text style={styles.pizzaTitle}>{item.title}</Text>
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
        contentContainerStyle={styles.listContainer}
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
