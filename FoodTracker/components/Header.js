import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants/themes';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> My Grocery List </Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    height: 85,
    position: "absolute",
    top: 0,
    justifyContent: 'space-between', // Distribute content vertically
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.tertiary,
  },
  headerText: {
    marginTop: 30,
    fontSize: 30,
    color: COLORS.primary,
  }
});

export default Footer;
