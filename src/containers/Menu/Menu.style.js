import { StyleSheet } from 'react-native';

import { C } from '../../common';

const { STYLE: { MAIN_WINDOW, UNIT } } = C;

export default StyleSheet.create({

  container: {
    paddingVertical: UNIT / 4,
  },

  coinList: {
    maxHeight: MAIN_WINDOW.HEIGHT - 80,
  },
});
