/* eslint-disable no-console */
const express = require('express');
const app = express();
const {resolve} = require('path');
const fs = require('fs');

app.use('/static', express.static(resolve(__dirname, '../dist')));

app.get('/*', (req, res)=>{
    let path = req.url;
    if (!path || path==='/'){
        path = '/index.html';
    }
    const htmlPath = resolve(__dirname, '../dist/', `.${path}`);
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    res.send(htmlContent);
});

app.listen(3004, ()=>{
    console.log('Application is running at port 3004');
})