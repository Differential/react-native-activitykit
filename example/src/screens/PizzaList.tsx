import {
  NavigationRouteContext,
  useNavigation,
} from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';

import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from './RootStackParamList';

import pizzas, { Pizza as PizzaType } from '../data/pizzas';

import { Header, Pager } from '../components';

// import Text from '../components/text';

const LIST_MARGIN = 14;
const ITEM_MARGIN = 6;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
  },
  pizzaBox: {
    margin: ITEM_MARGIN,
    width: '100%',
    height: '100%',
  },
  pizzaImage: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: '100%',
    width: '100%',
  },
  pizzaBorder: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: '#F5F2F2',
    borderWidth: 2,
    borderTopColor: 'transparent',
  },
  pizzaTitle: {
    margin: 8,
    // fontFamily: 'Apercu',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
    color: '#0A0909',
  },
  listContainer: {
    margin: LIST_MARGIN,
    height: '100%',
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
  size: number;
}> = ({
  item,
  navigation,
  size,
}: {
  item: PizzaType;
  navigation: OrderScreenNavigationPropType;
  size: number;
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Pizza', { pizza: item })}
    >
      <View style={[styles.pizzaBox, { width: size, height: size + 28 }]}>
        <Image
          style={[styles.pizzaImage, { width: size, height: size }]}
          source={{ uri: item.image }}
        />
        <View style={styles.pizzaBorder}>
          <Text style={styles.pizzaTitle}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PizzaList: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const navigation = useNavigation<OrderScreenNavigationPropType>();
  const { width } = useWindowDimensions();
  const pizzaSize = (width - LIST_MARGIN * 2 - ITEM_MARGIN * 4 - 8) / 2;
  return (
    <View style={styles.container}>
      <Header />
      <Pager
        pages={[
          {
            title: 'Pizzas',
            content: (
              <FlatList
                contentContainerStyle={styles.listContainer}
                data={pizzas}
                renderItem={({ item }) =>
                  renderPizza({ item, navigation, size: pizzaSize })
                }
                numColumns={2}
              />
            ),
          },
          {
            title: 'Calzones',
            content: <View />,
          },
        ]}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Pizza')}>
        <Text>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PizzaList;
