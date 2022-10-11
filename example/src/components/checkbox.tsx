import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';

import Icon from '/app/ui-kit/icon';

import Colors from '/app/ui-kit/colors';
import { baseUnit } from '/app/config/position';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    backgroundColor: Colors.font.tertiary,
  },
});

const Checkbox = ({
  size = baseUnit(4),
  color = Colors.font.brand,
  onValueChange,
  checked,
}) => {
  const renderUnchecked = () => (
    <View
      style={[
        styles.circle,
        { height: size, width: size, borderRadius: size / 2 },
      ]}
    />
  );

  const renderChecked = () => (
    <Icon.CheckCircleSolid color={color} size={size} />
  );

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onValueChange}>
      {checked ? renderChecked() : renderUnchecked()}
    </TouchableWithoutFeedback>
  );
};

export { Checkbox as default };
