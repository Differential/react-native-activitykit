import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from './RootStackParamList';
import { requestActivity, endActivity } from 'react-native-activitykit'

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

type orderScreenProp = StackNavigationProp<RootStackParamList, 'Order'>;

function handleRequest() {
  console.log("Requesting Live Activity")
  requestActivity()
}

function handleEnd() {
  console.log("Ending Live Activity")
  endActivity()
}

const Home = () => {
  const result = 'Result!';
  const navigation = useNavigation<orderScreenProp>();

  return (
    <View style={styles.container}>
      <Pressable onPress={handleRequest}>
        <Text>Start Activity</Text>
      </Pressable>

      <Pressable onPress={handleEnd}>
        <Text>End Activity</Text>
      </Pressable>
      {/* <Button title="Login" size="large" onPress={() => navigation.navigate('Order')} /> */}
    </View>
  );
};

export default Home;
