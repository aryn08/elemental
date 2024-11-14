// src/features/todo/useTodo.js
import { useState, useEffect } from 'react';
import { loadTasks, saveTasks } from './TodoService';

const useTodo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await loadTasks();
      if (storedTasks) setTasks(storedTasks);
    };
    fetchTasks();
  }, []);

  const addTask = (text) => {
    if (text.trim()) {
      const newTask = { id: Date.now().toString(), text, completed: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
    }
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return { tasks, addTask, removeTask, toggleTaskCompletion };
};

export default useTodo;
