import React from "react"
import styled from "styled-components"
import { scale, rhythm } from "../utils/typography"

import SEO from "../components/atoms/Seo"
import App from "../components/organisms/App"

export default () => (
  <App>
    <SEO title="404" description="無効なURLです。" />
    <Main>
      <Title>404</Title>
      <Hr />
      <Text>
        There isn't a web site you are looking for.
        <span role="img" aria-label="sad">
          {" "}
          😢{" "}
        </span>
      </Text>
    </Main>
  </App>
)

const Main = styled.main`
  text-align: center;
  margin: ${rhythm(4)} auto;
  width: 80%;
`

const Title = styled.h1`
  font-size: ${scale(1).fontSize};
  line-height: ${rhythm(2)};
`
const Text = styled.p`
  font-size: ${scale(1 / 2).fontSize};
  line-height: ${rhythm(2)};
  margin: ${rhythm(3)};
`

const Hr = styled.hr`
  background-color: rgba(34, 36, 38, 0.15);
`
