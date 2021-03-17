"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = __importDefault(require("electron"));
function createWindow() {
    var win = new electron_1.default.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    void win.loadFile("index.html");
}
void electron_1.default.app.whenReady().then(createWindow);
electron_1.default.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.default.app.quit();
    }
});
electron_1.default.app.on('activate', function () {
    if (electron_1.default.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
