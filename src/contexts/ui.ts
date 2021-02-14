/* eslint-disable no-unused-vars */
import * as React from 'react';

// TODO: slugをContextで管理するのは辞める。
export enum TopPages {
  HOME = '/',
  BLOG = '/blog/',
  ABOUT = '/about/',
  CONTACT = '/contact/',
}

export function createInitialSlug(): string {
  return '';
}

export const Context = React.createContext({
  slug: createInitialSlug(),
  setSlug: (_: string) => {},
});
