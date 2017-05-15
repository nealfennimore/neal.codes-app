import {put, call} from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/utils';
import {assert} from 'chai';
import {postsFlow, fetchPosts, REQUEST_POSTS, RECEIVE_POSTS} from 'sagas/blog/posts';
import blogService from 'services/blog';
import { setPageParams } from 'shared/blog';


describe('Posts Saga', function() {
    describe('Flow', ()=>{
        it('yields fetchPosts when not the current page', function() {
            const action = {
                params: {
                    page: 2
                },
                blog: {
                    posts: {
                        meta: {
                            pagination: {
                                page: 1
                            }
                        }
                    }
                }
            };

            const gen = postsFlow(action);

            assert.deepEqual(
                gen.next().value,
                call(fetchPosts, {page: action.params.page})
            );

            assert.deepEqual(
                gen.next().done,
                true
            );
        });
        it('yields nothing when the same page', function() {
            const action = {
                params: {
                    page: 1
                },
                blog: {
                    posts: {
                        meta: {
                            pagination: {
                                page: 1
                            }
                        }
                    }
                }
            };

            const gen = postsFlow(action);

            assert.deepEqual(
                gen.next().value,
                void 0
            );

            assert.deepEqual(
                gen.next().done,
                true
            );
        });
    });
    describe('Fetch', ()=>{
        it('gets posts', function() {
            const action = {
                page: 1
            };

            const gen = fetchPosts(action);

            assert.deepEqual(
                gen.next().value,
                put({ type: REQUEST_POSTS })
            );

            assert.deepEqual(
                gen.next().value,
                call(blogService.posts, setPageParams(action.page))
            );

            const mockTask = createMockTask();
            assert.deepEqual(
                gen.next(mockTask).value,
                put({ type: RECEIVE_POSTS, posts: {...mockTask} })
            );

        });
    });
});