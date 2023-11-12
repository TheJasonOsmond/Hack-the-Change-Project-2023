import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import DatabaseService from '../services/DatabaseService';

const AddFoodItemForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [error, setError] = useState('');

  const addFoodItem = () => {
    if (!name || !quantity || !expiryDate) {
      setError('Please fill out all fields.');
      return;
    }

    DatabaseService.addFoodItem(
      name,
      parseInt(quantity, 10),
      expiryDate,
      () => {
        // Clear form and reset error
        setName('');
        setQuantity('');
        setExpiryDate('');
        setError('');
      },
      (error) => {
        setError('Error adding food item: ' + error.message);
        console.error('Error adding food item:', error);
      }
    );
  };

  return (
    <View>
      <Text>Add Food Item</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
      />
      <TextInput
        placeholder="Expiry Date"
        value={expiryDate}
        onChangeText={(text) => setExpiryDate(text)}
      />
      <Button title="Add Food Item" onPress={addFoodItem} />

      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
};

export default AddFoodItemForm;
