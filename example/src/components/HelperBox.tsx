import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../config/theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    borderColor: theme.colors.lightGray,
    borderWidth: 2,
    backgroundColor: theme.colors.gluten,
    height: 100,
  },
});

type Props = {
  text: string;
};

const HelperBox = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default HelperBox;
