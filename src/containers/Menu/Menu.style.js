import { StyleSheet } from 'react-native';

import { C } from '../../common';

const { STYLE: { MAIN_WINDOW, UNIT } } = C;

export default StyleSheet.create({

  container: {
    paddingVertical: UNIT / 4,
  },

  coinList: {
    maxHeight: MAIN_WINDOW.HEIGHT - (UNIT * 3.6),
  },

  menuOptions: {
    borderTopColor: 'rgba(255,255,255,0.2)',
    borderTopWidth: 1,
    alignSelf: 'flex-end',
    marginTop: UNIT / 2,
    paddingTop: UNIT / 2,
    width: '100%',
  },
});
