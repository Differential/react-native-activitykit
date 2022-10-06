import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
  const [checkedOptions, setCheckedOptions] = useState([]);
  const options = [
    'spinich',
    'tomato',
    'mushrooms',
    'garlic',
    'super saucy',
    'extra cheezy',
  ];
  const result = 'You Made It To The Order Page!';
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Order')}>
        <Text>{'Order'}</Text>
      </TouchableOpacity>
      <Button title="Order" size="large" />
      {options.map((option) => (
        <Button
          title=""
          style={{
            backgroundColor: checkedOptions.includes(option) ? 'red' : 'green',
          }}
          icon={'check'}
          onPress={() => null}
        />
      ))} */}
    </View>
  );
};

export default Order;
