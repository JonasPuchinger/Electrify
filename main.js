const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    icon: 'icon.png',
    // frame: false
  });

  mainWindow.loadFile('public/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null
  });

  mainWindow.maximize();
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

app.on('activate', function () {
  if (mainWindow === null) createWindow();
})