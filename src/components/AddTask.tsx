import React from 'react';
import {Text, View} from 'react-native';
import {colors, displays, fonts} from '../styles/styles';
const AddTask: React.FC = () => {
  return (
    <View style={[displays.flex, displays.bord1, displays.center]}>
      <Text style={[fonts.primary, {color: colors.darkAirwell}]}>
        Composant AddTask
      </Text>
    </View>
  );
};
export default AddTask;
