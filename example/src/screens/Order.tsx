import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { X as CloseIcon } from 'react-native-feather';

import { useNavigation } from '@react-navigation/native';
import { endActivity, updateActivity, ActivityDismissalPolicies } from 'react-native-activitykit';

import type { Order as OrderType } from '../config/types';
import { Button } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  content: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
  },

  closeIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },

  button: {
    marginBottom: 16
  },
});

const Order = ({
  route: {
    params: { order },
  },
}: {
  route: { params: { order: OrderType } };
}) => {
  const { orderId, status, activityId } = order;
  const navigation = useNavigation();

  const handleUpdate = () => {
    updateActivity(activityId, { status: 'delivering' });
  };
  const handleEnd = async () => {
    const activity = await endActivity(activityId, {
      finalContentState: {
        status: "DELIVERED!"
      }
    });
    console.log("End", { activity })
  };

  const handleCancel = async () => {
    const activity = await endActivity(activityId, {
      dismissalPolicy: ActivityDismissalPolicies.immediate
    });
    console.log("End", { activity })
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{`Order #${orderId}`}</Text>
      </View>
      <View>
        <View style={styles.button}>
          <Button text={'Deliver order'} onPress={handleUpdate} />
        </View>
        <View style={styles.button}>
          <Button text={'Complete order (final Activity state)'} onPress={handleEnd} />
        </View>
        <View style={styles.button}>
          <Button text={'Cancel order (hide immediately)'} onPress={handleCancel} />
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
