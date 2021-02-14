import * as Comment from './comment';

export interface Model {
  [slug: string]: Comment.Model[];
}

export function createInitialState(): Model {
  return {};
}

export function set(state: Model, slug: string, newValues: Comment.Model[]) {
  return {
    ...state,
    [slug]: newValues,
  };
}

export function add(state: Model, slug: string, newValues: Comment.Model[]) {
  const oldComments = state[slug] || [];
  const newComments = new Map(oldComments.map((value) => [value.id, value]));
  newValues.forEach((value) => {
    newComments.set(value.id, value);
  });
  return {
    ...state,
    [slug]: Array.from(newComments.values()),
  };
}

export function remove(state: Model, slug: string, id: number) {
  const oldComments = state[slug] || [];
  return {
    ...state,
    [slug]: oldComments.filter((value) => value.id !== id),
  };
}
