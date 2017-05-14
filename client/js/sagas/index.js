import { all, fork } from 'redux-saga/effects';

import posts from './blog/posts';
import tags from './blog/tags';

export default function* rootSaga(){
    yield all([
        fork(posts),
        fork(tags)
    ]);
}