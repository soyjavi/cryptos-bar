import { node } from 'prop-types';
import React, { PureComponent, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer: ConsumerData } = Context;

class ProviderData extends PureComponent {
  state = {
    dataSource: ['BTC', 'ETH', 'LTC', 'XMR', 'EOS'],
    favorites: ['BTC', 'ETH', 'LTC'],
  }

  render() {
    return (
      <Provider value={{ ...this.state }}>
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
