import { node } from 'prop-types';
import React, { PureComponent, createContext } from 'react';
import io from 'socket.io-client';

import { C, fetch } from '../common';

const { TREND: { DOWN, UP } } = C;
const Context = createContext('data');
const { Provider, Consumer: ConsumerData } = Context;

// const parseC

class ProviderData extends PureComponent {
  constructor(props) {
    super(props);
    const { favorites = ['BTC', 'ETH', 'LTC', 'XMR'] } = props;

    const socket = io('https://streamer.cryptocompare.com/');
    socket.on('m', this._onSocketMessage);
    this.state = { coinList: [], favorites, socket };
  }

  async componentWillMount() {
    const { state: { socket } } = this;
    const ticker = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=20') || [];

    this.setState({
      coinList: ticker.map(({
        id, name, symbol, percent_change_1h: trend, price_usd: price, ...props
      }) => ({
        id,
        name,
        symbol,
        price: parseFloat(price, 10),
        trend: parseFloat(trend, 10) > 0 ? UP : DOWN,
        ...props,
      })),
    });

    socket.emit('SubAdd', { subs: ticker.map(({ symbol }) => `5~CCCAGG~${symbol}~USD`) });
  }

  componentWillUnmount() {
    this.state.socket.disconnect();
  }

  _onSocketMessage = (message) => {
    const parts = message.split('~');

    if (parts.length < 11 || parts[0] === '3' || parts[4] === '4') return;

    const { state: { coinList } } = this;
    const symbol = parts[2];
    let trend;
    if (parts[4] === '1') trend = UP;
    if (parts[4] === '2') trend = DOWN;

    this.setState({
      coinList: coinList.map(item => (
        item.symbol === symbol
          ?
          {
            ...item, price: parseFloat(parts[5], 10), symbol, trend,
          }
          : item
      )),
    });
  }

  _favoriteRemove = (symbol) => {
    this.setState({ favorites: this.state.favorites.filter(favorite => favorite !== symbol) });
  }

  _favoriteAdd = (symbol) => {
    this.setState({ favorites: [...this.state.favorites, symbol] });
  }

  render() {
    const events = {
      favoriteAdd: this._favoriteAdd,
      favoriteRemove: this._favoriteRemove,
    };

    return (
      <Provider value={{ ...this.state, ...events }}>
        { this.props.children }
      </Provider>
    );
  }
}

ProviderData.propTypes = {
  children: node,
};

ProviderData.defaultProps = {
  children: undefined,
};

export { ConsumerData, ProviderData };
