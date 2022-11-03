import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { X as CloseIcon } from 'react-native-feather';

import { useNavigation } from '@react-navigation/native';
import { endActivity, updateActivity } from 'react-native-activitykit';

import type { Order as OrderType } from '../config/types';
import { Button, HelperBox } from '../components';
import { useAppDispatch } from '../store/hooks';
import theme from '../config/theme';

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
  const { orderId, activityId, items, status, total } = order;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleUpdate = () => {
    updateActivity(activityId, { status: 'delivering' });
  };
  const handleEnd = async () => {
    const activity = await endActivity(activityId);
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
      <View style={styles.buttons}>
        <Button text={'Complete'} onPress={handleEnd} />
        <Button text={'Deliver'} onPress={handleUpdate} />
      </View>
      <View style={styles.helper}>
        <HelperBox text={'Deliver your order!'} />
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
