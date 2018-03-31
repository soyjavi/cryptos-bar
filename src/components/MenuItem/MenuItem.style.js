import { StyleSheet } from 'react-native';

import { C } from '../../common';

const { STYLE: { MENU_ITEM_ROW, OFFSET } } = C;

export default StyleSheet.create({

  container: MENU_ITEM_ROW,

  text: {
    color: 'white',
    paddingLeft: OFFSET,
  },
});
