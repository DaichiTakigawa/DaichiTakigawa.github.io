import * as React from 'react'
import styled from '@emotion/styled'

import {Seo} from '../components/atoms'
import {rhythm, scale} from '../utils/typography'

const Component: React.FC = () => (
  <>
    <Seo title="404" description="無効なURLです。" />
    <Main>
      <p>404</p>
      <Hr />
      <p>
        There isn&apos;t a web site you are looking for.
        <span role="img" aria-label="sad">
          {' '}
          😢{' '}
        </span>
      </p>
    </Main>
  </>
)

const Main = styled.main({
  textAlign: 'center',
  margin: [rhythm(4), 'auto'],
  width: '80%',
  '& p': {
    fontSize: scale(1 / 2).fontSize,
    lineHeight: rhythm(2),
    margin: rhythm(3),
  },
})

const Hr = styled.hr({
  backgroundColor: 'rgba(34, 36, 38, 0.15)',
})

export default Component
