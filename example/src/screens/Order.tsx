import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { X as CloseIcon } from 'react-native-feather';

import { useNavigation } from '@react-navigation/native';
import { endActivity } from 'react-native-activitykit';

import type { Order as OrderType } from '../config/types';
import { Button } from '../components';

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

  closeIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },

  button: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
});

const Order = ({
  route: {
    params: { order },
  },
}: {
  route: { params: { order: OrderType } };
}) => {
  const { orderId } = order;
  const navigation = useNavigation();

  const handleEnd = () => {
    endActivity();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{`Order #${orderId}`}</Text>
      </View>
      <View style={styles.button}>
        <Button text={'Complete order'} onPress={handleEnd} />
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
