import React, {useState} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import {colors, displays, fonts} from '../styles/styles';
import {TaskType} from '../types/types';

interface TaskProps {
  data: TaskType;
  onDelete: (id: number) => void;
}
const Task: React.FC<TaskProps> = ({data, onDelete}) => {
  const [task1, setTask1] = useState(false);
  const [taskTitle, setTaskTitle] = useState(data.title);
  return (
    <View
      style={[
        displays.center,
        displays.row,
        displays.w90,
        {
          height: 60,
          padding: 10,
          marginVertical: 20,
          borderColor: colors.airwellBlue,
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: colors.white,
        },
      ]}>
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
        style={{
          marginLeft: 10,
          backgroundColor: task1 ? colors.airwellBlue : colors.white,
          borderColor: colors.airwellBlue,
          borderWidth: 2,
          borderRadius: 3,
          height: 25,
          width: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {task1 ? <Text style={{color: colors.lightAirwell}}>✔︎</Text> : null}
      </TouchableOpacity>
    </View>
  );
};
export default Task;
