const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/route', (req, res) => {
    res.send('Une nouvelle route!');
});

app.get('/route/:name', (req, res) => {
    res.send('Un nom en paramètre: ' + req.params.name);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});