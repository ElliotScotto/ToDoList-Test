import React, {useState} from 'react';
//Below : there are the types, components, and styles features which are organized into three main folders :
//components
import TaskList from './src/components/TaskList';
import AddTask from './src/components/AddTask';
//styles
import {displays} from './src/styles/styles';
//types
import {TaskType} from './src/types/types';
import {SafeAreaView, StatusBar} from 'react-native';

function App(): React.JSX.Element {
  const [tasks, setTasks] = useState<TaskType[]>([]); //array with an id and a title
  const [taskCount, setTaskCount] = useState<number>(0); //total of tasks
  const [taskNumber, setTaskNumber] = useState<number>(1); //number of a new task
  return (
    <SafeAreaView style={[displays.white, displays.flex]}>
      <StatusBar barStyle="default" />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        taskCount={taskCount}
        setTaskCount={setTaskCount}
      />
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        taskCount={taskCount}
        setTaskCount={setTaskCount}
        taskNumber={taskNumber}
        setTaskNumber={setTaskNumber}
      />
    </SafeAreaView>
  );
}
export default App;
