import React from 'react';
import {Text, View, FlatList} from 'react-native';
//styles
import {colors, displays, fonts} from '../styles/styles';
//components
import Task from './Task';
//types
import {TaskListProps} from '../types/types';
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  setTasks,
  taskCount,
  setTaskCount,
}) => {
  //Below : we create a function to remove tasks
  const deleteTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks); //we init our array of tasks
    setTaskCount(taskCount - 1); //we remove 1 of the total
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
      {/* Below : We can create a virtualized scrolling list to display every tasks */}
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
