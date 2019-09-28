const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
   








let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1080, height: 720})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
console.log("READY");

http = require('http'),
    //https = require('https'),   
	socketio = require('socket.io')
    express = require('express');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('addr: '+add);
	
})

var port = 8888;


var xapp = express();

var server = http.createServer( xapp).listen(port, function(){
  console.log("Express server listening on port " + port);

var b = []

socketio.listen(server).on('connection',function(socket){

//start main code
console.log("New Connection from: "+ socket.id)



socket.on("update",function(data){
console.log("UPDATE");
//console.log(data);
	
	socket.broadcast.emit("update",data)
	
})



socket.on("disconnect",function(){
console.log("Disconnect");
	
})

		})


});



// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
