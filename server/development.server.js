import express from 'express';
import config from '../config';
import handleRender from './rendering';

const app = express();

app.get('/', handleRender);

app.listen(config.server.port, config.server.ip, ()=>{
    console.log('Dev server started on', `${config.server.ip}:${config.server.port}`);
});