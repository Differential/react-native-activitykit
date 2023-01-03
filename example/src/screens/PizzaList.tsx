import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import { useSelector } from 'react-redux';

import type { CartState } from '../store/cart';

import pizzas, { Pizza as PizzaType } from '../data/pizzas';

import { CartButton, Header, HelperBox } from '../components';
import theme from '../config/theme';

const LIST_MARGIN = 14;
const ITEM_MARGIN = 6;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.colors.bg,
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
    borderColor: theme.colors.lighterGray,
    borderWidth: 2,
    borderTopColor: theme.colors.transparent,
  },
  pizzaTitle: {
    margin: 8,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
    color: theme.colors.text,
  },
  listContainer: {
    margin: LIST_MARGIN,
    height: '100%',
    width: '100%',
  },
  cart: {
    position: 'absolute',
    right: 20,
    top: 60,
  },
  helper: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});

const renderPizza: React.FC<{
  item: PizzaType;
  navigation: any;
  size: number;
}> = ({
  item,
  navigation,
  size,
}: {
  item: PizzaType;
  navigation: any;
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
  const navigation = useNavigation<any>();
  const itemCount = useSelector(
    (state: { cart: CartState }) => state.cart.cart.length
  );
  const helperText =
    itemCount === 0
      ? 'Add a pizza to your cart to get started!'
      : 'Great! Now go to your cart to check out!';
  const { width } = useWindowDimensions();
  const pizzaSize = (width - LIST_MARGIN * 2 - ITEM_MARGIN * 4 - 8) / 2;
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={pizzas}
        renderItem={({ item }) =>
          renderPizza({ item, navigation, size: pizzaSize })
        }
        numColumns={2}
      />
      <View style={styles.cart}>
        <CartButton />
      </View>
      <View style={styles.helper}>
        <HelperBox text={helperText} />
      </View>
    </View>
  );
};

export default PizzaList;
