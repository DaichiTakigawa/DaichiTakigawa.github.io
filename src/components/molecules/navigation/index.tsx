import * as React from 'react'
import styled from '@emotion/styled'

import {Title, Divider, AdSense} from '../../atoms'
import {Context as UiContext} from '../../../contexts/ui'
import {rhythm} from '../../../utils/typography'

import SNS from './sns'
import Linklist from './linklist'

const Navigation: React.FC = () => {
  const {pageName} = React.useContext(UiContext)

  return (
    <>
      <Title />
      <StickyContainer>
        <StyledDivider />
        <Linklist currentPage={pageName} />
        <SNS />
        <AdSense.Responsive format="rectangle" />
      </StickyContainer>
    </>
  )
}

const StickyContainer = styled.div({
  position: 'sticky',
  top: 0,
})

const StyledDivider = styled(Divider)({
  margin: `${rhythm(2)} ${rhythm(1)}`,
})

export default Navigation
