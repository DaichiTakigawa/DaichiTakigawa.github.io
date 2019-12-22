import React from "react"
import styled from "styled-components"
import { Container, Divider } from "semantic-ui-react"
import { scale, rhythm } from "../utils/typography"

import SEO from "../components/atoms/Seo"

const Index = () => (
  <Container textAlign="center" style={{ paddingTop: rhythm(4) }}>
    <SEO title="404" description="無効なURLです。" />
    <Title>404</Title>
    <Divider />
    <Text>
      There isn't a web site you are looking for.
      <span role="img" aria-label="sad">
        {" "}
        😢{" "}
      </span>
    </Text>
  </Container>
)

const Title = styled.h1`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
`
const Text = styled.p`
  font-size: ${scale(1 / 2).fontSize}
  line-height: ${rhythm(2)}
  margin: ${rhythm(3)}
`

export default Index
