const electron = require('electron');

const { app, BrowserWindow } = electron;


// starta a aplicação electron
app.on('ready', () => {
  //console.log('Aplication started');[
  const janelaPrincipal = new BrowserWindow({});
  janelaPrincipal.loadURL(`file://${__dirname}/index.html`)
});