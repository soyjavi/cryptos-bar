import { app, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';

import { C } from './common';

app.setName(C.APP_NAME);
app.dock.hide();

app.on('ready', () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    // backgroundColor: 'transparent',
    frame: false,
    height: C.MAIN_WINDOW.MIN_HEIGHT,
    width: C.MAIN_WINDOW.MIN_WIDTH,
    show: false,
    transparent: true,
    vibrancy: 'ultra-dark',
  });

  mainWindow.loadURL(url.format({
    pathname: path.resolve(process.cwd(), 'public', 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Open the DevTools.
  mainWindow.webContents.openDevTools({ mode: 'detach' });

  global.shared = { mainWindow };
});
