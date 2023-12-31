import {StyleSheet, Dimensions} from 'react-native';
const widthScreen = Dimensions.get('window').width;
const colors = {
  airwellBlue: '#115691',
  lightAirwell: '#ECF6FF',
  darkAirwell: '#051b2e',
  error: '#c8534d',
  white: '#ffffff',
};
const fonts = StyleSheet.create({
  mainTitle: {fontSize: 20, fontWeight: '500', letterSpacing: 0.4},
  primary: {fontSize: 18, fontWeight: '500'},
  secondary: {fontSize: 16, fontWeight: '500'},
  tertiary: {fontSize: 16, fontWeight: '500'},
});
const displays = StyleSheet.create({
  center: {alignItems: 'center', justifyContent: 'center'},
  aliC: {alignItems: 'center'},
  flex: {flex: 1},
  row: {flexDirection: 'row'},
  col: {flexDirection: 'column'},
  w100: {width: widthScreen * 1},
  w95L: {width: widthScreen * 0.95 + 1.5},
  w95: {width: widthScreen * 0.95},
  w90: {width: widthScreen * 0.9},
  w80: {width: widthScreen * 0.8},
  w75: {width: widthScreen * 0.75},
  white: {backgroundColor: 'white'},
  bot100: {position: 'absolute', bottom: 100},
  bord1: {borderWidth: 1, borderColor: 'black'},
  bord2: {borderWidth: 1, borderColor: 'red'},
  bord3: {borderWidth: 1, borderColor: 'green'},
  bord4: {borderWidth: 1, borderColor: 'blue'},
  bord5: {borderWidth: 1, borderColor: 'goldenrod'},
  alwaysVisibleVerticalIndicator: {
    opacity: 1,
  },
  taskContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: widthScreen * 0.9,
    height: 60,
    padding: 10,
    marginVertical: 20,
    borderColor: colors.airwellBlue,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  check: {
    marginLeft: 10,
    borderColor: colors.airwellBlue,
    borderWidth: 2,
    borderRadius: 3,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: widthScreen * 0.9,
    marginVertical: 20,
    backgroundColor: colors.airwellBlue,
    borderRadius: 5,
    padding: 10,
  },
  // Below : default react-native style
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
export {colors, fonts, displays};
