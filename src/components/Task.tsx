import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors, displays, fonts} from '../styles/styles';

const Task: React.FC = () => {
  const [task1, setTask1] = useState(false);
  const [task2, setTask2] = useState(false);
  const [task3, setTask3] = useState(false);
  const [task4, setTask4] = useState(false);
  const [task5, setTask5] = useState(false);
  {
    console.log(task1);
  }
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
      <View style={[displays.aliC, displays.flex]}>
        <Text style={[fonts.primary, {color: colors.darkAirwell}]}>
          Tâche n°1
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
