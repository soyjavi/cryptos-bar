import { StyleSheet } from 'react-native';

import { C } from '../../common';

const { STYLE: { MENU_ITEM_ROW, UNIT, OFFSET } } = C;

export default StyleSheet.create({

  container: MENU_ITEM_ROW,



  text: {
    color: 'white',
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
