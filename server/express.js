const express = require('express');
const path    = require('path');

const config  = require('../config');
const app     = express();

// Serve compiled static assets
app.use(express.static(config.paths.PUBLIC));

app.get('/', (req, res) => {
    res.render(
        path.resolve(config.paths.PUBLIC, 'index.html')
    );
});

app.get('/projects', (req, res) => {
});

app.listen(config.server.port);