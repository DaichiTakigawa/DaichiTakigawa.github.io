import {combineReducers} from 'redux';
import * as Comments from './comments';

export function createInitialState() {
  return {
    comments: Comments.createInitialState(),
  };
}

export type AppState = Readonly<ReturnType<typeof createInitialState>>;

export default combineReducers<AppState>({
  comments: Comments.default,
});
