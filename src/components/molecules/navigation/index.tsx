import * as React from 'react'
import styled from '@emotion/styled'

import {Title, Divider, Adsense} from '../../atoms'
import {rhythm} from '../../../utils/typography'

import SNS from './sns'
import Linklist from './linklist'

type Props = {
  currentPage: string
}

const Navigation: React.FC<Props> = ({currentPage}) => (
  <>
    <Title />
    <StickyContainer>
      <StyledDivider />
      <Linklist currentPage={currentPage} />
      <SNS />
      <Adsense.Responsive format="rectangle" />
    </StickyContainer>
  </>
)

const StickyContainer = styled.div({
  position: 'sticky',
  top: 0,
})

const StyledDivider = styled(Divider)({
  margin: `${rhythm(2)} ${rhythm(1)}`,
})

export default Navigation
