import { app, BrowserWindow, Tray } from 'electron';
import path from 'path';
import url from 'url';

import { C } from './common';

const { STYLE: { MAIN_WINDOW } } = C;

let mainWindow;
let tray;

app.setName(C.APP_NAME);
app.dock.hide();

app.on('ready', () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    frame: false,
    height: MAIN_WINDOW.HEIGHT,
    width: MAIN_WINDOW.WIDTH,
    show: false,
    transparent: true,
    vibrancy: 'ultra-dark',
  });

  mainWindow.loadURL(url.format({
    pathname: path.resolve(process.cwd(), 'public', 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Create tray
  tray = new Tray(path.resolve(process.cwd(), 'public', 'assets', 'trayIcon.png'));
  tray.setTitle('Wait a moment...');

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

  app.on('browser-window-blur', () => {
    tray.setHighlightMode('never');
    mainWindow.hide();
  });

  // Open the DevTools.
  mainWindow.webContents.openDevTools({ mode: 'detach' });

  global.shared = {
    mainWindow,
    tray,
  };
});

app.on('browser-window-blur', () => {
  tray.setHighlightMode('never');
  mainWindow.hide();
});

