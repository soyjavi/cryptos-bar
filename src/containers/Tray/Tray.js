import { remote } from 'electron';
import path from 'path';
import React from 'react';

import { C } from '../../common';
import { Consumer } from '../../context';

const { MAIN_WINDOW: { MIN_HEIGHT, MIN_WIDHT } } = C;

class Tray extends React.PureComponent {
  constructor(props) {
    super(props);

    const { mainWindow } = remote.getGlobal('shared');
    const tray = new remote.Tray(path.resolve(process.cwd(), 'public', 'assets', 'trayIcon.png'));

    tray.on('click', () => {
      if (mainWindow.isVisible()) {
        tray.setHighlightMode('never');
        mainWindow.hide();
      } else {
        const { x, y, width } = tray.getBounds();
        tray.setHighlightMode('always');
        mainWindow.setPosition(x, y);
        mainWindow.setSize(width > MIN_WIDHT ? width : MIN_WIDHT, MIN_HEIGHT);
        mainWindow.show();
      }
    });

    tray.setTitle('Wait a moment...');

    remote.app.on('browser-window-blur', () => {
      tray.setHighlightMode('never');
      mainWindow.hide();
    });

    this.state = { tray };
  }

  _changeTitle = ({ favorites = [] }) => {
    const { state: { tray } } = this;
    tray.setTitle(favorites.join(' '));
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
