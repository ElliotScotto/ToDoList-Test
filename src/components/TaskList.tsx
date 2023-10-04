import React from 'react';
import {Text, View} from 'react-native';
//styles
import {colors, displays, fonts} from '../styles/styles';
//components
import Task from './Task';
const TaskList: React.FC = () => {
  return (
    <View
      style={[
        displays.flex,
        displays.bord2,
        displays.aliC,
        {justifyContent: 'flex-start', paddingTop: 50},
      ]}>
      <Text style={[fonts.mainTitle, {color: colors.airwellBlue}]}>
        Liste de tâches
      </Text>
      <Task />
    </View>
  );
};
export default TaskList;
