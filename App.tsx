/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
// //components
import TaskList from './src/components/TaskList';
//styles
import {displays} from './src/styles/styles';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AddTask from './src/components/AddTask';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={displays.sectionContainer}>
      <Text
        style={[
          displays.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          displays.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
interface TaskType {
  id: number;
  title: string;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskCount, setTaskCount] = useState<number>(0);
  console.log('taskCount : ', taskCount);
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
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
// import React from 'react';

// import {SafeAreaView, StatusBar} from 'react-native';
// //components
// import TaskList from './src/components/TaskList';
// //styles
// import {displays} from './src/styles/styles';

// function App(): JSX.Element {
//   return (
//     <SafeAreaView style={[displays.white, displays.flex, displays.bord1]}>
//       <StatusBar barStyle="default" />
//       <TaskList />
//     </SafeAreaView>
//   );
// }

// export default App;
