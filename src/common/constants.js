const UNIT = 10;

export default {
  APP_NAME: 'Cryptos Bar',

  ENV: {
    DEVELOPMENT: process.env.NODE_ENV === 'development',
    PRODUCTION: process.env.NODE_ENV !== 'development',
  },

  STYLE: {
    UNIT,
    OFFSET: UNIT * 1.6,
    MAIN_WINDOW: {
      HEIGHT: 464,
      WIDTH: 266,
    },
  },

  SYMBOL: {
    BTC: '₿',
    ETH: 'Ξ',
    LTC: 'Ł',
    XMR: 'ɱ',
  },

  TREND: {
    UP: 'up',
    DOWN: 'down',
  },
};
