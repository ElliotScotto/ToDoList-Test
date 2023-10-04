import React from 'react';
import {Text, View, FlatList} from 'react-native';
//styles
import {colors, displays, fonts} from '../styles/styles';
//components
import Task from './Task';
//types
import {TaskType} from '../types/types';

interface TaskListProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  taskCount: number;
  setTaskCount: React.Dispatch<React.SetStateAction<number>>;
}
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  setTasks,
  taskCount,
  setTaskCount,
}) => {
  const deleteTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    setTaskCount(taskCount - 1);
  };
  return (
    <View
      style={[
        displays.aliC,
        {justifyContent: 'flex-start', paddingTop: 50, flex: 4},
      ]}>
      <Text style={[fonts.mainTitle, {color: colors.airwellBlue}]}>
        Liste de tâches
      </Text>
      <Text
        style={[fonts.secondary, {color: colors.darkAirwell, marginTop: 10}]}>
        {taskCount === 1
          ? `${taskCount} tâche en cours`
          : `${taskCount} tâches en cours`}
      </Text>
      <FlatList
        data={tasks}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        style={displays.alwaysVisibleVerticalIndicator}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          return (
            <View key={item.id}>
              <Task data={item} onDelete={deleteTask} />
            </View>
          );
        }}
      />
    </View>
  );
};
export default TaskList;
