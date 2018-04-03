import { remote } from 'electron';
import React from 'react';

import { C, formatPrice } from '../../common';
import { Consumer } from '../../context';

const { SYMBOL } = C;

class Tray extends React.PureComponent {
  constructor(props) {
    super(props);

    const { tray, mainWindow } = remote.getGlobal('shared');
    tray.on('click', () => {
      if (mainWindow.isVisible()) {
        tray.setHighlightMode('never');
        mainWindow.hide();
      } else {
        const { x, y } = tray.getBounds();
        tray.setHighlightMode('always');
        mainWindow.setPosition(x, y);
        mainWindow.show();
      }
    });

    remote.app.on('browser-window-blur', () => {
      tray.setHighlightMode('never');
      mainWindow.hide();
    });

    this.state = { tray };
  }

  _changeTitle = ({ coinList = [], favorites = [] }) => {
    if (coinList.length === 0 || favorites.length === 0) return;

    let title = '';
    favorites.forEach((favorite) => {
      const coin = coinList.find(({ symbol }) => symbol === favorite);
      if (coin) title += `${SYMBOL[favorite] || `${favorite} `}${formatPrice(coin.price)}  `;
    });
    this.state.tray.setTitle(title.trim());
  }

  render() {
    return (
      <Consumer>
        { this._changeTitle }
      </Consumer>
    );
  }
}

export default Tray;
