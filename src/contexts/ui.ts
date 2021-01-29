/* eslint-disable no-unused-vars */
import * as React from 'react'

export enum PageName {
  HOME = 'Home',
  BLOG = 'Blog',
  ABOUT = 'About',
  CONTACT = 'Contact',
}

export function createInitialPageName(): PageName | null {
  return null
}

export const Context = React.createContext({
  pageName: createInitialPageName(),
  setPageName: (_: PageName | null) => {},
})
