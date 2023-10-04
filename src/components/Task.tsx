import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors, displays, fonts} from '../styles/styles';
interface TaskType {
  id: number;
  title: string;
}
interface TaskProps {
  data: TaskType;
  onDelete: (id: number) => void;
  taskCount: number;
}
const Task: React.FC<TaskProps> = ({data, onDelete, taskCount}) => {
  const [task1, setTask1] = useState(false);
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
        <Text style={[fonts.primary, {color: colors.darkAirwell}]}>X</Text>
      </TouchableOpacity>
      <View style={[displays.aliC, displays.flex]}>
        <Text style={[fonts.primary, {color: colors.darkAirwell}]}>
          Tâche n°{data.id + 1}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setTask1(!task1);
        }}
        style={{
          marginLeft: 20,
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
