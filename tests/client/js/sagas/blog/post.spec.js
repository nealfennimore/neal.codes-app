import {put, call} from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/utils';
import {assert} from 'chai';
import {postFlow, fetchPost, REQUEST_POST, RECEIVE_POST, SET_POST} from 'sagas/blog/post';
import blogService from 'services/blog';


describe('Post Saga', function() {
    describe('flow', function(){
        it('fetches when no post', function() {
            const slug = 'Test';
            const action = {
                slug,
                blog: {
                    post: { slug },
                    posts: {
                        posts: [{slug}]
                    }
                }
            };

            const gen = postFlow(action);

            assert.deepEqual(
                gen.next().value,
                call(fetchPost, {slug: action.slug})
            );

            assert.deepEqual(
                gen.next().done,
                true
            );
        });

        it('sets post when not active', function() {
            const slug = 'Test1';
            const action = {
                slug,
                blog: {
                    post: { slug: 'Test2' },
                    posts: {
                        posts: [{slug}]
                    }
                }
            };

            const gen = postFlow(action);

            assert.deepEqual(
                gen.next().value,
                put({ type: SET_POST, posts: [{slug}] })
            );

            assert.deepEqual(
                gen.next().done,
                true
            );
        });
    });

    describe('fetch', function(){
        it('gets post', function() {
            const action = {
                slug: 'slug',
                params: {include: 'tags'}
            };

            const gen = fetchPost(action);

            assert.deepEqual(
                gen.next().value,
                put({ type: REQUEST_POST })
            );

            assert.deepEqual(
                gen.next().value,
                call(blogService.postBySlug, action)
            );

            const mockTask = createMockTask();

            assert.deepEqual(
                gen.next(mockTask).value,
                put({ type: RECEIVE_POST, posts: undefined })
            );

        });
    });

});