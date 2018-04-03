import { StyleSheet } from 'react-native';

import { C } from '../../common';

const { STYLE: { OFFSET, UNIT } } = C;

export default StyleSheet.create({

  container: {
    paddingHorizontal: UNIT * 0.8,
    paddingVertical: UNIT * 0.3,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },

  hover: {
    backgroundColor: 'white',
    cursor: 'pointer',
  },

  text: {
    color: 'white',
  },

  title: {
    paddingLeft: OFFSET,
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
    width: OFFSET,
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
