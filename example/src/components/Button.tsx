import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import theme from '../config/theme';

export const APPBAR_HEIGHT = 44;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 48,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});

type ButtonProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  backgroundColor?: string;
  textColor?: string;
  text: string;
};

const Button = ({
  text,
  backgroundColor = theme.colors.saucy,
  textColor = theme.colors.bg,
  onPress,
}: ButtonProps) => {
  const textStyle = { color: textColor };
  const backgroundStyle = { backgroundColor };
  return (
    <TouchableOpacity
      style={[styles.container, backgroundStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
