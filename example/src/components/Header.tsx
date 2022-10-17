import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../../assets/images/logo.svg';

import theme from '../config/theme';

export const APPBAR_HEIGHT = 44;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    backgroundColor: theme.colors.gluten,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: APPBAR_HEIGHT,
  },
});

const Header = () => {
  console.log(theme.colors.gluten);
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default Header;
