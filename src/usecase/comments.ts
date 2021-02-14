import {Dispatch} from 'redux';

import {Comment} from '../domain/models';
import * as CommentRepository from '../domain/repositories/comments';
import {add, remove} from '../modules/comments';

export function syncWithServer(slug: string) {
  return async (dispatch: Dispatch) => {
    try {
      const res = await CommentRepository.getAll(slug);
      console.log('GET comments', res.comments);
      if (res) {
        dispatch(add(slug, res.comments));
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export function postAndSync(comment: Comment.PostModel) {
  return async (dispatch: Dispatch) => {
    try {
      const res = await CommentRepository.post(comment);
      console.log('POST comment', res.comment);
      if (res) {
        dispatch(add(comment.slug, [res.comment]));
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export function removeAndSync(slug: string, id: number) {
  return async (dispatch: Dispatch) => {
    try {
      const success = await CommentRepository.remove(id);
      if (success) {
        dispatch(remove(slug, id));
      }
    } catch (e) {
      console.log(e);
    }
  };
}
