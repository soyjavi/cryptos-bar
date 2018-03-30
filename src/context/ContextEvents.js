import { remote } from 'electron';
import { node } from 'prop-types';
import React, { PureComponent, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer: ConsumerEvents } = Context;

class ProviderEvents extends PureComponent {
  state = {
    menuVisible: false,
  }

  render() {
    const value = {
      onQuit: remote.app.quit(),
    };

    return (
      <Provider value={{ ...this.state, ...value }}>
        { this.props.children }
      </Provider>
    );
  }
}

ProviderEvents.propTypes = {
  children: node,
};

ProviderEvents.defaultProps = {
  children: undefined,
};

export { ConsumerEvents, ProviderEvents };
