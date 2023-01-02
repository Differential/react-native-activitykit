import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { X as CloseIcon } from 'react-native-feather';

import { useNavigation } from '@react-navigation/native';
import {
  endActivity,
  updateActivity,
  ActivityDismissalPolicies,
} from 'react-native-activitykit';

import type { Order as OrderType } from '../config/types';
import { Button, HelperBox } from '../components';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updateOrderStatus } from '../store/orders';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
  },
  image: {
    width: '100%',
    height: 200,
  },
  closeIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  buttons: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  helper: {
    position: 'absolute',
    bottom: 180,
    alignSelf: 'center',
  },
});

const PIZZA_CLOSEUP =
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60';

const Order = ({
  route: {
    params: { order },
  },
}: {
  route: { params: { order: OrderType } };
}) => {
  const { orderId, activityId, items, total } = order;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const storedOrder = useAppSelector((state) =>
    state.orders.orders.find((o) => o.orderId === orderId)
  );

  console.log(storedOrder);
  const status = storedOrder?.status || 'preparing';

  const handleUpdate = () => {
    const newOrder: OrderType = {
      orderId,
      activityId,
      items,
      status: 'delivering',
      total,
    };
    dispatch(updateOrderStatus(newOrder));
    updateActivity(activityId, { status: 'delivering' });
  };
  const handleEnd = async () => {
    const newOrder: OrderType = {
      orderId,
      activityId,
      items,
      status: 'completed',
      total,
    };
    dispatch(updateOrderStatus(newOrder));
    const activity = await endActivity(activityId, {
      finalContentState: {
        status: 'DELIVERED!',
      },
    });
    console.log('End', { activity });
  };

  const handleCancel = async () => {
    const activity = await endActivity(activityId, {
      dismissalPolicy: ActivityDismissalPolicies.immediate,
    });
    console.log('End', { activity });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: PIZZA_CLOSEUP }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{`Order #${orderId}`}</Text>
        {items.map((item, index) => (
          <Text key={`${index}${item.pizza._id}`}>{item.pizza.title}</Text>
        ))}
        <Text>{`$${total}.00`}</Text>
        <Text>{status}</Text>
      </View>
      <View>
        <View style={styles.button}>
          <Button text={'Deliver order'} onPress={handleUpdate} />
        </View>
        <View style={styles.button}>
          <Button
            text={'Complete order (final Activity state)'}
            onPress={handleEnd}
          />
        </View>
        <View style={styles.button}>
          <Button
            text={'Cancel order (hide immediately)'}
            onPress={handleCancel}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => navigation.goBack()}
      >
        <CloseIcon color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Order;
