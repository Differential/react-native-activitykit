import React from 'react';

import { Text, StyleSheet } from 'react-native';

import theme from '../config/theme';

interface Props {
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.m,
    color: theme.colors.text,
  },
});

function TextComponent({ children }: Props) {
  return <Text style={styles.text}>{children || ''} </Text>;
}
export default TextComponent;
