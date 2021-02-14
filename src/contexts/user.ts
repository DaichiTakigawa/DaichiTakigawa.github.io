/* eslint-disable no-unused-vars */
import * as React from 'react';

export interface User {
  id: number;
  name: string;
}

export function createInitialUser(): User | null {
  return null;
}

export const Context = React.createContext({
  user: createInitialUser(),
  setUser: (_: User) => {},
});
