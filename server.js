const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'dist')));

// viewed at based directory http://localhost:8080/
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const server = http.createServer(app);
const port = process.env.PORT || '8080';

server.listen(port, () => console.log(`API running on localhost:${port}`));
