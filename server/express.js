// import path from 'path';
import express from 'express';
import handleRender from './rendering';

const { server } = require('../config');
const app = express();

app.get('/', handleRender);

app.listen(server.port);