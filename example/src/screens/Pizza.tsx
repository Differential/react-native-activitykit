import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import { X as CloseIcon } from 'react-native-feather';

import { useNavigation } from '@react-navigation/native';

import { addToCart } from '../store/cart';

import type {
  CartItem,
  Pizza as PizzaType,
  Topping as ToppingType,
} from '../config/types';
import toppings from '../data/toppings';
import { Button, Checkbox, HelperBox } from '../components';
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
  description: {
    color: theme.colors.description,
    fontSize: 12,
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 200,
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
  closeIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  list: {
    marginHorizontal: 8,
  },
  button: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
  helper: {
    position: 'absolute',
    bottom: 160,
    alignSelf: 'center',
  },
});

const PIZZA_CLOSEUP =
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60';

type Selection = {
  selected: boolean;
};

type ToppingsListOption = ToppingType & Selection;

const renderTopping: React.FC<{
  item: ToppingsListOption;
  onPress: (event: GestureResponderEvent) => void;
}> = ({
  item,
  onPress,
}: {
  item: ToppingsListOption;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.topping}>
        <Text style={styles.toppingText}>{item.name}</Text>
        <Checkbox checked={item.selected} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const Pizza = ({
  route: {
    params: { pizza },
  },
}: {
  route: { params: { pizza: PizzaType } };
}) => {
  const emptyOptions: string[] = [];
  const [selectedOptions, setSelectedOptions] =
    useState<string[]>(emptyOptions);
  const { title, description } = pizza;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const selectedToppings: ToppingType[] = toppings.filter((t: ToppingType) =>
      selectedOptions.includes(t.name)
    );

    const cartItem: CartItem = {
      pizza,
      toppings: selectedToppings,
      price: 20,
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
    navigation.goBack();
  };

  const toppingsList: ToppingsListOption[] = toppings.map((t: ToppingType) => ({
    ...t,
    selected: selectedOptions.includes(t.name),
  }));

  const toggleOption = (name: string) => {
    const isSelected = selectedOptions.includes(name);
    if (isSelected) {
      // Remove option
      const newOptions = selectedOptions.filter((o: string) => o !== name);
      setSelectedOptions(newOptions);
    } else {
      // Add option
      const newOptions = [...selectedOptions, name];
      setSelectedOptions(newOptions);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: PIZZA_CLOSEUP }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={toppingsList}
          renderItem={({ item }) =>
            renderTopping({
              item,
              onPress: () => toggleOption(item.name),
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button text={'Add to cart'} onPress={handleAddToCart} />
      </View>
      <View style={styles.helper}>
        <HelperBox text={'Click Add To Cart to start your order!'} />
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

export default Pizza;
