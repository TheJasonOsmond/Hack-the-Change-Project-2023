import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants/themes';

const Footer = () => {
  return (
    <View style={styles.footer}>
      {/* Circular button */}
      <TouchableOpacity style={styles.circularButton}>
        {/* Use the "+" symbol instead of text */}
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 120, // Adjust the height as needed
    width: 400, //  Adjust the width as needed
    backgroundColor: COLORS.gray2, // Set the background color of the footer
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Add margin to separate the button from the footer
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 50,
    color: COLORS.lightWhite,
    lineHeight: 55,
  },
});

export default Footer;
