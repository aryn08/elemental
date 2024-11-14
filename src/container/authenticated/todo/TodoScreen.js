// src/features/todo/TodoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import TodoItem from './TodoItem';
import useTodo from './useTodo';
import styles from './TodoStyles';

const TodoScreen = () => {
  const [task, setTask] = useState('');
  const { tasks, addTask, removeTask, toggleTaskCompletion } = useTodo();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={() => {
        addTask(task);
        setTask('');
      }} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onToggle={() => toggleTaskCompletion(item.id)}
            onRemove={() => removeTask(item.id)}
          />
        )}
      />
    </View>
  );
};

export default TodoScreen;
