const { app, BrowserWindow, Menu } = require('electron')

let mainWindow

function createMainWindow () {

  // hack : https://github.com/electron/electron/issues/16521#issuecomment-500197459
  Menu.setApplicationMenu(null)

  mainWindow = new BrowserWindow({
    resizable: false,
    movable: false,
    fullscreen: true,
    autoHideMenuBar: true,
  })

  mainWindow.loadFile('index.html')
  mainWindow.setMenu(null)
  mainWindow.removeMenu()

  mainWindow.on('closed', () => {
    mainWindow = undefined
  })
}

app.on('ready', createMainWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (mainWindow !== undefined) {
    return
  }
  createMainWindow()
})
