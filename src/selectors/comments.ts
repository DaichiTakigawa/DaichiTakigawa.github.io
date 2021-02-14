import {createSelector} from 'reselect';
import {AppState} from '../modules';

import {Comments} from '../domain/models';
import formatDate from '../lib/format-date';

function selectComments(state: AppState) {
  return state.comments;
}

export const selectFormattedDateComments = createSelector(
  [selectComments],
  (comments) => {
    const res: Comments.Model = {};
    Object.entries(comments)
      .map(([slug, value]) => {
        return {
          slug,
          comments: value.map((comment) => ({
            ...comment,
            createdAt: formatDate(comment.createdAt),
            updatedAt: formatDate(comment.updatedAt),
          })),
        };
      })
      .forEach(({slug, comments}) => {
        res[slug] = comments;
      });
    return res;
  }
);
