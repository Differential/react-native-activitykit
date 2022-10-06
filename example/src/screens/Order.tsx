import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Chip, Icon, PageControls } from 'react-native-nucleus-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

const Order = () => {
  const result = 'You Made It To The Order Page!';
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button title="Order" size="large" />
      <Chip selected={false} icon={'check'} />
    </View>
  );
};

export default Order;
