// src/features/todo/TodoItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './TodoStyles';

const TodoItem = ({ item, onToggle, onRemove }) => (
  <View style={styles.taskItem}>
    <CheckBox
      value={item.completed}
      onValueChange={onToggle}
    />
    <Text style={[styles.taskText, item.completed && styles.completed]}>
      {item.text}
    </Text>
    <TouchableOpacity onPress={onRemove}>
      <Text style={styles.remove}>Remove</Text>
    </TouchableOpacity>
  </View>
);

export default TodoItem;
