import {Comment, Comments} from '../domain/models';

export function createInitialState() {
  return Comments.createInitialState();
}

export type State = ReturnType<typeof createInitialState>;

export const SET = 'takigawa-memo/comments/set' as const;
export const ADD = 'takigawa-memo/comments/add' as const;
export const REMOVE = 'takigawa-memo/comments/remove' as const;

export function set(slug: string, comments: Comment.Model[]) {
  return {
    type: SET,
    payload: {
      slug,
      comments,
    },
  };
}

export function add(slug: string, comments: Comment.Model[]) {
  return {
    type: ADD,
    payload: {
      slug,
      comments,
    },
  };
}

export function remove(slug: string, id: number) {
  return {
    type: REMOVE,
    payload: {
      slug,
      id,
    },
  };
}

export type Action =
  | Readonly<ReturnType<typeof set>>
  | Readonly<ReturnType<typeof add>>
  | Readonly<ReturnType<typeof remove>>;

export default function reducer(state = createInitialState(), action: Action) {
  switch (action.type) {
    case SET:
      return Comments.set(state, action.payload.slug, action.payload.comments);
    case ADD:
      return Comments.add(state, action.payload.slug, action.payload.comments);
    case REMOVE:
      return Comments.remove(state, action.payload.slug, action.payload.id);
    default:
      return state;
  }
}
