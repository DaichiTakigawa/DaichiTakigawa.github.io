import * as React from 'react'

import {Seo} from '../components/atoms'
import {Context as UiContext, PageName} from '../contexts/ui'
import {About, Content} from '../components/organisms'

const Component: React.FC = () => {
  const {setPageName} = React.useContext(UiContext)
  setPageName(PageName.ABOUT)

  return (
    <>
      <Seo title="このサイトについて" description="このサイトについて" />
      <Content>
        <About />
      </Content>
    </>
  )
}

export default Component
