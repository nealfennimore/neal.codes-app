import { all, fork } from 'redux-saga/effects';

import posts from './blog/posts';
import post from './blog/post';
import tags from './blog/tags';

export default function* rootSaga(){
    yield all([
        fork(posts),
        fork(post),
        fork(tags)
    ]);
}