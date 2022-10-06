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

type PizzaProps = {
  _id: string;
  title: string;
};

const Pizza = ({ _id, title }: PizzaProps) => {
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
      <Text>{title}</Text>
      {/* <Button title="Order" size="large" />
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

export default Pizza;
