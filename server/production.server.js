import express from 'express';
import handleRender from './rendering';

import { server } from '../config';

const app = express();

app.get('/', handleRender);

app.listen(server.port);