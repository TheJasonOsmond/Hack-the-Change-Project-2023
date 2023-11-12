import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Add from './components/add'; // Adjust the import path based on your project structure


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Add/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


