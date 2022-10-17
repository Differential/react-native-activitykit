import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pager } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,
  },
});

const Orders: React.FC = () => {
  const pages = [
    { title: 'One', content: <Text>ONE!</Text> },
    { title: 'Two', content: <Text>TWO!</Text> },
  ];
  return (
    <View style={styles.container}>
      <Pager pages={pages} />
    </View>
  );
};

export default Orders;
