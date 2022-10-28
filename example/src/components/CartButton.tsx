import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { ShoppingCart } from 'react-native-feather';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import type { CartState } from '../store/cart';

import theme from '../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  count: {
    color: theme.colors.saucy,
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 6,
  },
});

const CartButton = () => {
  const itemCount = useSelector(
    (state: { cart: CartState }) => state.cart.cart.length
  );
  const navigation = useNavigation();

  return (
    <TouchableNativeFeedback onPress={() => navigation.navigate('Cart')}>
      <View style={styles.container}>
        <ShoppingCart color={theme.colors.saucy} />
        {itemCount ? <Text style={styles.count}>{itemCount}</Text> : null}
      </View>
    </TouchableNativeFeedback>
  );
};

export default CartButton;
