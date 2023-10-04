import React, {useState} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import {colors, displays, fonts} from '../styles/styles';
import {TaskProps} from '../types/types';

const Task: React.FC<TaskProps> = ({data, onDelete}) => {
  const [task1, setTask1] = useState(false); // we check or uncheck each task
  const [taskTitle, setTaskTitle] = useState(data.title); //
  return (
    <View style={displays.taskContainer}>
      <TouchableOpacity onPress={() => onDelete(data.id)}>
        <Text
          style={[fonts.primary, {color: colors.darkAirwell, marginRight: 10}]}>
          X
        </Text>
      </TouchableOpacity>
      <View style={[displays.aliC, displays.flex]}>
        <TextInput
          value={taskTitle}
          onChangeText={setTaskTitle}
          style={[
            {width: '100%', borderColor: colors.airwellBlue, borderWidth: 1},
          ]}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setTask1(!task1);
        }}
        style={[
          displays.check,
          {backgroundColor: task1 ? colors.airwellBlue : colors.white},
        ]}>
        {task1 ? <Text style={{color: colors.lightAirwell}}>✔︎</Text> : null}
      </TouchableOpacity>
    </View>
  );
};
export default Task;
