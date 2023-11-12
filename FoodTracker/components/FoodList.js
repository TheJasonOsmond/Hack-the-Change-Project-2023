import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import DatabaseService from '../services/DatabaseServices';

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    loadFoodItems();
  }, []);

  const loadFoodItems = () => {
    DatabaseService.getAllFoodItems(
      (data) => setFoodItems(data),
      (error) => console.error('Error loading food items:', error)
    );
  };

  const deleteFoodItem = (itemId) => {
    DatabaseService.deleteFoodItem(
      itemId,
      () => loadFoodItems(),
      (error) => console.error('Error deleting food item:', error)
    );
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Expiry Date: {item.expiry_date}</Text>
      <Button title="Delete" onPress={() => deleteFoodItem(item.id)} />
    </View>
  );

  return (
    <View>
      <Text>Food List</Text>
      <FlatList
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FoodList;
