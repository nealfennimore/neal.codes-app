/* eslint-disable no-console */
import 'newrelic';
import 'babel-polyfill';
import express from 'express';
import config from '../config';
import handleRouting from './routing';

const app = express();

app.head('*', (req, res)=> res.status(200).send({ success: true }) );

app.get('*', handleRouting);

app.listen(config.server.port, ()=>{
    console.log('Starting production server', config.server.port);
});
