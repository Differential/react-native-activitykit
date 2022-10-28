import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.bg,
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
