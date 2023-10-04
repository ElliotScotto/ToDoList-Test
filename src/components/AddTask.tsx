import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors, displays, fonts} from '../styles/styles';
import {AddTaskProps} from '../types/types';

const AddTask: React.FC<AddTaskProps> = ({
  taskCount,
  setTaskCount,
  tasks,
  setTasks,
  taskNumber,
  setTaskNumber,
}) => {
  const addTask = () => {
    const newTask = {id: taskCount, title: `Tâche n°${taskNumber}`};
    setTasks([...tasks, newTask]);
    setTaskCount(taskCount + 1); //we increment the total
    setTaskNumber(taskNumber + 1); //we add 1 to the next number
  };
  return (
    <View
      style={[displays.flex, displays.aliC, {justifyContent: 'flex-start'}]}>
      <TouchableOpacity
        style={displays.buttonAdd}
        onPress={() => {
          addTask();
        }}>
        <View style={[displays.center]}>
          <Text style={[fonts.primary, {color: colors.white}]}>+</Text>
        </View>
        <View style={[{marginLeft: 5}, displays.center]}>
          <Text style={[fonts.secondary, {color: colors.white}]}>Ajouter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default AddTask;
