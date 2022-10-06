import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

const PIZZA_CLOSEUP =
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60';

type PizzaProps = {
  _id: string;
  title: string;
  image: string;
};

const Pizza = ({
  route: {
    params: { pizza },
  },
}: {
  route: { params: { pizza: PizzaProps } };
}) => {
  const [checkedOptions, setCheckedOptions] = useState([]);
  console.log(pizza);
  const { title, image } = pizza;
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
      <Image source={{ uri: PIZZA_CLOSEUP }} style={styles.image} />
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
