const { app, BrowserWindow, screen } = require('electron');

let mainWindow;

function createWindow (w, h) {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    icon: 'icon.png',
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
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  createWindow(width, height);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

app.on('activate', function () {
  if (mainWindow === null) createWindow();
})