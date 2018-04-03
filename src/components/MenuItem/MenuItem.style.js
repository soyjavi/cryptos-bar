import { StyleSheet } from 'react-native';

import { C } from '../../common';

const { STYLE: { UNIT } } = C;

export default StyleSheet.create({

  container: {
    paddingHorizontal: UNIT * 0.8,
    paddingVertical: UNIT * 0.3,
    width: '100%',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  hover: {
    backgroundColor: 'white',
    cursor: 'pointer',
  },

  text: {
    color: 'white',
    userSelect: 'none',
  },

  textHover: {
    color: 'black',
    fontWeight: 'bold',
  },

  monospace: {
    fontFamily: "'IBM Plex Mono', monospace;",
    fontSize: 12,
  },

  check: {
    width: UNIT,
    marginRight: UNIT * 0.8,
  },

  symbol: {
    width: UNIT * 4.8,
  },

  name: {
    flex: 1,
  },

  price: {
    alignSelf: 'flex-end',
  },

  up: {
    color: '#AED581',
  },

  down: {
    color: '#E57373',
  },
});
