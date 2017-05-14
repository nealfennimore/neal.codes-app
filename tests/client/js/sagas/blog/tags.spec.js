import React from 'react';
import {put, call} from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/utils';
import {assert} from 'chai';
import merge from 'lodash/merge';
import {tagsFlow, fetchTags, REQUEST_TAGS, RECEIVE_TAGS} from 'sagas/blog/tags';
import { queryParams } from 'shared/blog';
import blogService from 'services/blog';



describe('Tags Saga', function() {
    describe('Flow', ()=>{
        const slug = 'testSlug';
        const defaultAction = {
            params: {
                slug,
                tagPage: 2
            },
            blog: {
                tags: {
                    [slug]: {
                        meta: {
                            pagination: {
                                page: 1
                            }
                        }
                    }
                }
            }
        };

        it('yields fetchTags when not the current page', function() {
            const action = defaultAction;
            const gen = tagsFlow(action);

            assert.deepEqual(
                gen.next().value,
                call(fetchTags, {slug, page: action.params.tagPage})
            );

            assert.deepEqual(
                gen.next().done,
                true
            );
        });
        it('yields nothing when the same page', function() {
            const action = Object.assign({}, defaultAction, {
                params: {
                    slug,
                    tagPage: 1
                }
            });

            const gen = tagsFlow(action);

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
                slug: 'Test',
                page: 1
            };

            const gen = fetchTags(action);

            assert.deepEqual(
                gen.next().value,
                put({ type: REQUEST_TAGS })
            );

            const params = merge({}, queryParams, {
                params: {
                    filter: `tags:[${action.slug}]`,
                    page:   Number(action.slug) || 1
                }
            });

            assert.deepEqual(
                gen.next().value,
                call(blogService.tags, params)
            );

            const mockTask = createMockTask();
            assert.deepEqual(
                gen.next(mockTask).value,
                put({ type: RECEIVE_TAGS, slug: action.slug, tags: {...mockTask} })
            );

        });
    });
});