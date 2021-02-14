/* eslint-disable no-unused-vars */
import * as React from 'react';

import {User} from '../domain/models';

export function createInitialUser(): User.Model | null {
  return null;
}

export const Context = React.createContext({
  user: createInitialUser(),
  setUser: (_: User.Model) => {},
});
