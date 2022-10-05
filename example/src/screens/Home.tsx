import * as React from 'react';
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

const Home = () => {
  const result = 'Result!';
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
};

export default Home;
