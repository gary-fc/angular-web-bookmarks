//Install express server
const express = require('express');
const path = require('path');

const app =  express();

app.use(express.static('./dist/angular-web-bookmarks'))

app.get('/*', (req, res)=> res.sendFile('index.html', {root: 'dist/angular-web-bookmarks/'}),)

app.listen(process.env.PORT || 8080);
