const { app, BrowserWindow } = require('electron');
const electron = require('electron');

// How to use Electron API in app instead of here
// https://stackoverflow.com/questions/41819632/how-to-call-a-function-module-in-electron-from-my-webpage

let mainWindow;

function createWindow (w, h) {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    icon: 'public/icon.png',
    minWidth: w,
    minHeight: h,
    // frame: false
  });

  mainWindow.loadFile('public/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  mainWindow.maximize();
}

app.on('ready', () => {
  const screen = electron.screen;
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  createWindow(width, height);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

app.on('activate', function () {
  if (mainWindow === null) createWindow();
})