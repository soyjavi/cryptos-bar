const UNIT = 10;

export default {
  APP_NAME: 'Cryptos Bar',

  STYLE: {
    UNIT,
    OFFSET: UNIT * 1.6,
    MAIN_WINDOW: {
      HEIGHT: 500,
      WIDTH: 266,
    },
    MENU_ITEM_ROW: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: UNIT * 0.8,
      paddingVertical: UNIT * 0.3,
      width: '100%',
    },
  },

  SYMBOL: {
    BTC: '₿',
    ETH: 'Ξ',
    LTC: 'Ł',
    XMR: 'ɱ',
  },
};
