import React from "react"
import styled from "styled-components"
import { Button } from "semantic-ui-react"
import { rhythm } from "../../utils/typography"

export default ({ url, title }) => {
  return (
    <Container>
      <A
        href={`https://www.facebook.com/share.php?u=${url}`}
        target="_blank"
        rel="nofollow"
      >
        <Button color="facebook" icon="facebook" as={StyledButton} />
      </A>
      <A
        href={`https://twiter.com/share?url=${url}`}
        target="_blank"
        rel="nofollow"
      >
        <Button color="twitter" icon="twitter" as={StyledButton} />
      </A>
      <A
        href={`https://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`}
        target="_blank"
        rel="nofollow"
      >
        <Button color="linkedin" content="B!" as={StyledButton} />
      </A>
      <A
        href={`https://getpocket.com/edit?url=${url}&title=${title}`}
        target="_blank"
        rel="nofollow"
      >
        <Button color="youtube" icon="get pocket" as={StyledButton} />
      </A>
    </Container>
  )
}

const Container = styled.div`
  margin: ${rhythm(1)} 0;
  display: flex
  justify-content: space-around
`

const A = styled.a`
  width: 100%;
`

const StyledButton = styled.button`
  width: 100%
  border-radius: 0 !important
`
