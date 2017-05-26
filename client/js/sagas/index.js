import { spawn } from 'redux-saga/effects';

import posts from './blog/posts';
import post from './blog/post';
import tags from './blog/tags';

export default function* rootSaga(){
    yield spawn(posts);
    yield spawn(post);
    yield spawn(tags);
}