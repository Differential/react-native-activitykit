import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import toppings, { Topping as ToppingType } from '../data/toppings';

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
  topping: {
    height: 48,
    width: '100%',
  },
});

const PIZZA_CLOSEUP =
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60';

type PizzaProps = {
  _id: string;
  title: string;
  image: string;
};

type Selection = {
  selected: boolean;
};

const ToppingOption: React.FC<ToppingType> = ({
  name,
  price,
  selected,
}: ToppingType & Selection) => {
  return (
    <View style={styles.topping}>
      <Text>{name}</Text>
    </View>
  );
};

const Pizza = ({
  route: {
    params: { pizza },
  },
}: {
  route: { params: { pizza: PizzaProps } };
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(pizza);
  const { title } = pizza;

  return (
    <View style={styles.container}>
      <Image source={{ uri: PIZZA_CLOSEUP }} style={styles.image} />
      <Text>{title}</Text>
      {toppings.map((topping) => (
        <ToppingOption
          key={topping._id}
          {...topping}
          selected={selectedOptions.includes(topping.name)}
        />
      ))}
    </View>
  );
};

export default Pizza;
