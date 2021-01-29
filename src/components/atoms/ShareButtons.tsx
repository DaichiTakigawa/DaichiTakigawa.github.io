import * as React from 'react'
import styled from '@emotion/styled'
import {rhythm} from '../../utils/typography'

type Props = {
  url: string
  title: string
}

type SBProps = {
  color: string
}

const ShareButtons: React.FC<Props> = ({url, title}) => (
  <Container className="columns is-mobile">
    <ShareButton color="#3b5998" className="column">
      <a
        href={`https://www.facebook.com/share.php?u=${url}`}
        target="_blank"
        rel="noreferrer noopener">
        <i className="fab fa-facebook" />
      </a>
    </ShareButton>
    <ShareButton color="#55acee" className="column">
      <a
        href={`https://twitter.com/share?url=${url}`}
        target="_blank"
        rel="noreferrer noopener">
        <i className="fab fa-twitter" />
      </a>
    </ShareButton>
    <ShareButton color="#008fde" className="column">
      <a
        href={`https://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`}
        target="_blank"
        rel="noreferrer noopener">
        <Hatena>B!</Hatena>
      </a>
    </ShareButton>
    <ShareButton color="#d3505a" className="column">
      <a
        href={`https://getpocket.com/edit?url=${url}&title=${title}`}
        target="_blank"
        rel="noreferrer noopener">
        <i className="fab fa-get-pocket" />
      </a>
    </ShareButton>
  </Container>
)

const Container = styled.div({
  marginTop: 0,
  width: '100%',
  margin: 'auto',
})

const ShareButton = styled.div((props: SBProps) => ({
  background: `${props.color}`,
  padding: 0,
  '& > a': {
    display: 'block',
    color: '#fff',
    padding: `${rhythm(1 / 4)} 0`,
    textAlign: 'center',
    fontSize: '1.3rem',
  },
}))

const Hatena = styled.span({
  fontWeight: 'bold',
})

export default ShareButtons
