import * as React from 'react'

import {Seo} from '../components/atoms'
import {Context as UiContext, PageName} from '../contexts/ui'
import {Content, Contact} from '../components/organisms'

const Component: React.FC = () => {
  const {setPageName} = React.useContext(UiContext)
  setPageName(PageName.CONTACT)

  return (
    <>
      <Seo title="コンタクト" description="Contact" />
      <Content>
        <Contact />
      </Content>
    </>
  )
}

export default Component
