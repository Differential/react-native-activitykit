import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { X as CloseIcon } from 'react-native-feather';
import { useAppSelector } from '../store/hooks';
import { useNavigation } from '@react-navigation/native';

import { endActivities } from 'react-native-activitykit'
import Name from '../../assets/images/name.svg';

import type { Order } from '../config/types';
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
  cancel: {
    color: theme.colors.saucy,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    opacity: 0.5,
    padding: 16
  }
});

const renderItem = ({ item, navigation }: { item: Order; navigation: any }) => (
  <TouchableOpacity
    style={styles.topping}
    onPress={() => navigation.navigate('Order', { order: item })}
  >
    {item.items.map((i) => {
      return (
        <Text key={i.pizza.title} style={styles.toppingText}>
          {i.pizza.title}
        </Text>
      );
    })}
    <Text style={styles.toppingText}>{item.status}</Text>
  </TouchableOpacity>
);

const Orders = () => {
  const navigation = useNavigation();

  const orders = useAppSelector((state) => state.orders.orders);

  async function cancelAllOrders() {
    const activities = await endActivities({
      dismissalPolicy: "immediate"
    })

    console.log("Cancel Orders", { activities })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Name />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseIcon color={theme.colors.saucy} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{'Orders'}</Text>
        <Text style={styles.description}>{'Track your orders!'}</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          ListHeaderComponent={orders.length > 1 ? <TouchableOpacity onPress={cancelAllOrders}>
            <Text style={styles.cancel}>Cancel All Orders</Text>
          </TouchableOpacity> : null}
          data={orders}
          renderItem={({ item }) => renderItem({ item, navigation })}
        />
      </View>
    </View>
  );
};

export default Orders;
