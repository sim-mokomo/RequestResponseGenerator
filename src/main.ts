import electron from "electron"

function createWindow () {
    const window : electron.BrowserWindow = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: false,
        }
    })

    window.removeMenu()
    void window.loadFile('src/views/index.html')
}


void electron.app.whenReady().then(createWindow)
electron.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron.app.quit()
    }
})
electron.app.on('activate', () => {
    if (electron.BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

electron.ipcMain.on("click",(event, args) => {
    //TODO: 属性追加
})