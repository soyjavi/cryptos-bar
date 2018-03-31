import { node } from 'prop-types';
import React, { PureComponent, createContext } from 'react';

import { fetch } from '../common';

const Context = createContext();
const { Provider, Consumer: ConsumerData } = Context;

class ProviderData extends PureComponent {
  state = {
    coinList: undefined,
    favorites: ['BTC', 'ETH', 'LTC', 'XMR'],
  }

  async componentDidMount() {
    const coinList = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=20') || undefined;

    this.setState({
      coinList,
    });
  }

  _onRemoveFavorite = (symbol) => {
    this.setState({
      favorites: this.state.favorites.filter(favorite => favorite !== symbol),
    });
  }

  _onAddFavorite = (symbol) => {
    this.setState({
      favorites: [...this.state.favorites, symbol],
    });
  }

  render() {
    const events = {
      onAddFavorite: this._onAddFavorite,
      onRemoveFavorite: this._onRemoveFavorite,
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
