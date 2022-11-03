import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { X as CloseIcon } from 'react-native-feather';
import { startActivity } from 'react-native-activitykit';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useNavigation } from '@react-navigation/native';
import { createOrder } from '../store/orders';
import { clearCart } from '../store/cart';

import Name from '../../assets/images/name.svg';

import type { CartItem, Order } from '../config/types';
import { Button, HelperBox } from '../components';
import theme from '../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  content: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
  },
  description: {
    color: theme.colors.description,
    fontSize: 12,
    marginBottom: 24,
  },
  topping: {
    height: 48,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.bg,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  toppingText: {
    color: theme.colors.text,
    fontSize: 16,
  },
  list: {
    marginHorizontal: 8,
  },
  buttons: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  helper: {
    position: 'absolute',
    bottom: 160,
    alignSelf: 'center',
  },
});

const renderItem = ({ item }: { item: CartItem }) => (
  <View style={styles.topping}>
    <Text style={styles.toppingText}>{item.pizza.title}</Text>
  </View>
);

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const orderIds = useAppSelector((state) =>
    state.orders.orders.map((o) => o.orderId)
  );
  const nextOrderId = orderIds.length > 0 ? Math.max(...orderIds) + 1 : 1;

  const handleCheckout = async () => {
    const activity = await startActivity({ status: 'preparing' });
    console.log({ activity });
    const order: Order = {
      activityId: activity.id,
      orderId: nextOrderId,
      items: cart,
      total: 20,
      status: 'preparing',
    };
    dispatch(createOrder(order));
    dispatch(clearCart());
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Name />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseIcon color={theme.colors.saucy} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{'Cart'}</Text>
        <Text style={styles.description}>
          {'Check out your delicious selections!'}
        </Text>
      </View>
      <View style={styles.list}>
        <FlatList data={cart} renderItem={renderItem} />
      </View>
      <View style={styles.buttons}>
        <Button
          backgroundColor="#000"
          text={'Back'}
          onPress={() => navigation.goBack()}
        />
        <Button text={'Order!'} onPress={handleCheckout} />
      </View>
      <View style={styles.helper}>
        <HelperBox text={'Ready to order!'} />
      </View>
    </View>
  );
};

export default Cart;
