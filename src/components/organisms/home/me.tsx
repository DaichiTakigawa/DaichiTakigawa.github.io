import * as React from 'react'
import styled from '@emotion/styled'

import {Image} from '../../atoms'
import {rhythm, scale} from '../../../utils/typography'

const Me: React.FC = () => (
  <>
    <H2>運営者について</H2>
    <article className="media">
      <figure className="media-left">
        <p className="image is-164x164">
          <Image fileName="profile.png" alt="プロファイル画像" />
        </p>
      </figure>
      <Introduce className="media-content">
        <p>都内に住む学生。</p>
      </Introduce>
    </article>
    <p>
      <ul>
        <li>
          GitHub :{' '}
          <a
            href="https://github.com/DaichiTakigawa"
            target="_blank"
            rel="noopener noreferrer">
            https://github.com/DaichiTakigawa{' '}
            <i className="fas fa-external-link-alt"></i>
          </a>
        </li>
        <li>
          Twitter :{' '}
          <a
            href="https://twitter.com/damenin27844103"
            target="_blank"
            rel="noopener noreferrer">
            https://twitter.com/damenin27844103{' '}
            <i className="fas fa-external-link-alt"></i>
          </a>
        </li>
      </ul>
    </p>
  </>
)

export const H2 = styled.h2({
  fontSize: scale(1).fontSize,
  lineHeight: rhythm(2),
  fontWeight: 'bold',
  paddingTop: rhythm(3),
  color: 'rgb(70, 70, 70)',
})

const Introduce = styled.div({
  marginTop: 'auto',
  '& > p': {
    marginBottom: rhythm(2),
  },
})

export default Me
