import { spawn } from 'redux-saga/effects';

import posts from './blog/posts';
import post from './blog/post';
import tags from './blog/tags';
import injector from './injector';

export default function* rootSaga(){
    yield spawn(injector);
    yield spawn(posts);
    yield spawn(post);
    yield spawn(tags);
}
