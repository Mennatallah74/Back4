var express = require('express');
var app = express();
var ParseServer = require('parse-server').ParseServer;
var path = require('path');

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the index.html for root
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

var api = new ParseServer({
  databaseURI: 'your-database-uri',  // Replace with your database URI
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/main.js',
  appId: 'd52a08cd-3deb-4efe-b1cb-20457e778fd8',  // Your provided appId
  masterKey: 'your-master-key',  // Replace with your master key
  serverURL: 'https://firstApp.back4app.io/parse',  // Ensure this is correct
});

var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

var port =
