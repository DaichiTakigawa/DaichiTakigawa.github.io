import * as React from 'react'

import * as UiContex from './contexts/ui'

const App: React.FC = ({children}) => {
  const [pageName, setPageName] = React.useState(
    UiContex.createInitialPageName()
  )

  return (
    <UiContex.Context.Provider
      value={{pageName: pageName, setPageName: setPageName}}>
      {children}
    </UiContex.Context.Provider>
  )
}

export default App
