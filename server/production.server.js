import express from 'express';
import handleRender from './rendering';

import config from '../config';

const app = express();

app.get('/', handleRender);

app.listen(config.server.port, ()=>{
    console.log('Starting production server', config.server.port);
});