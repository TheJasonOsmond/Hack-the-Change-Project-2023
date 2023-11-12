import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants/themes';

const AddButton = () => {
  return (
    <View style={styles.container}>
      {/* Your main content goes here */}
      <View style={styles.mainContent}>
        {/* Content above the button */}
      </View>

      {/* Footer bar */}
      <View style={styles.footer}>
        {/* Circular button */}
        <TouchableOpacity style={styles.circularButton}>
          {/* Use the "+" symbol instead of text */}
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Distribute content vertically
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 120, // Adjust the height as needed
    width: 400, // Set the width to the entire screen width
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

export default AddButton;
