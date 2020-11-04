// Modules to control application life and create native browser window
import { app, BrowserWindow, ipcMain, screen } from "electron";
import path from "path";
import { callTemplate, imTemplate } from "./template";

function createWindow() {
  // Create the browser window.
  const notificationWindow = new BrowserWindow({
    alwaysOnTop: true,
    frame: false,
    resizable: false,
    show: false,
    skipTaskbar: true,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  notificationWindow.loadFile(path.join(__dirname, "../notification.html"));

  // Open the DevTools.
  notificationWindow.webContents.openDevTools({ mode: "undocked" });

  notificationWindow.webContents.once("dom-ready", () => {
    // notificationWindow.webContents.executeJavaScript(
    //   `initialize(${JSON.stringify({ ...callTemplate, isDarkTheme: true })})`
    // );

    notificationWindow.webContents.executeJavaScript(
      `initialize(${JSON.stringify({ ...imTemplate, isDarkTheme: true })})`
    );
  });

  const display = screen.getPrimaryDisplay().workArea;
  ipcMain.on("resize", (_, { width, height }: Electron.Size) => {
    notificationWindow.setBounds({
      width,
      height,
      x: display.x + display.width - 5 - width,
      y: display.y + display.height - 5 - height,
    });
    notificationWindow.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
