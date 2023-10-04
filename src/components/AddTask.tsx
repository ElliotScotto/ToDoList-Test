import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors, displays, fonts} from '../styles/styles';
import {TaskType} from '../types/types';

interface AddTaskProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  taskCount: number;
  setTaskCount: React.Dispatch<React.SetStateAction<number>>;
  taskNumber: number;
  setTaskNumber: React.Dispatch<React.SetStateAction<number>>;
}

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
    setTaskCount(taskCount + 1);
    setTaskNumber(taskNumber + 1);
  };
  return (
    <View
      style={[displays.flex, displays.aliC, {justifyContent: 'flex-start'}]}>
      <TouchableOpacity
        style={[
          displays.aliC,
          displays.center,
          displays.row,
          displays.w90,
          {
            marginVertical: 20,
            backgroundColor: colors.airwellBlue,
            borderRadius: 5,
            padding: 10,
          },
        ]}
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
