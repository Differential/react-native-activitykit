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

// import Text from '../components/text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
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
    padding: 6,
    // backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#F5F2F2',
  },
  pizzaImage: {
    borderRadius: 8,
    // height: 120,
    width: '100%',
  },
  pizzaTitle: {
    marginTop: 8,
  },
  listContainer: {
    marginHorizontal: 14,
    width: '100%',
  },
});

type OrderScreenNavigationPropType = StackNavigationProp<
  RootStackParamList,
  'Order'
>;

const renderPizza: React.FC<{
  item: PizzaType;
  navigation: StackNavigationProp<RootStackParamList, 'Order'>;
}> = ({
  item,
  navigation,
}: {
  item: PizzaType;
  navigation: OrderScreenNavigationPropType;
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Pizza', { pizza: item })}
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

const Home: React.FC = () => {
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
      <TouchableOpacity onPress={() => navigation.navigate('Pizza')}>
        <Text>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
