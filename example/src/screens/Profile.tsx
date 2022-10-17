import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D0D0D0',
  },
});

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Coming soon!</Text>
    </View>
  );
};

export default Profile;
