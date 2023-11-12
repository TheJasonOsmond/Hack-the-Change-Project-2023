// services/DatabaseService.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('FoodTracker.db');

const createTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS food_items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, quantity INTEGER, expiry_date TEXT)',
      [],
      () => console.log('Table created successfully'),
      (_, error) => console.error('Error creating table:', error)
    );
  });
};

const DatabaseService = {
  initDatabase: () => {
    createTables();
  },

  addFoodItem: (name, quantity, expiryDate, onSuccess, onError) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO food_items (name, quantity, expiry_date) VALUES (?, ?, ?)',
        [name, quantity, expiryDate],
        (_, result) => onSuccess(result),
        (_, error) => onError(error)
      );
    });
  },

  getAllFoodItems: (onSuccess, onError) => {
    db.transaction((tx) => {
      tx.executeSql( 'SELECT * FROM food_items',
        [],
        (_, { rows }) => onSuccess(rows.raw()),
        (_, error) => onError(error)
      );
    });
  },

  deleteFoodItem: (itemId, onSuccess, onError) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM food_items WHERE id = ?',
        [itemId],
        (_, result) => onSuccess(result),
        (_, error) => onError(error)
      );
    });
  },
};

export default DatabaseService;

