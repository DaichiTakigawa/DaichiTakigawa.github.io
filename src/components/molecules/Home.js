import React from "react"
import styled from "styled-components"
import { Image, Divider, Container, Flag, Responsive } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"

import src from "../../../contents/images/profile.jpg"
import breakpoints from "../../utils/breakpoint"

export default () => (
  <Segment>
    <StyledContainer text>
      <Responsive as={Title} minWidth={breakpoints.tabletLb}>
        TAKIGAWA MEMO
      </Responsive>
      <Responsive as={MobileTitle} maxWidth={breakpoints.moblieUb}>
        TAKIGAWA MEMO
      </Responsive>
      <StyledDivider />
      <Image src={src} fluid />
      <Styledp>
        I'm a software engineer in Tokyo, Japan <Flag name="japan" />
      </Styledp>
      <Styledp>備忘録のためにまとめたブログです。</Styledp>
      <Styledp>
        主に、Android、AWS、Windowsのことについてまとめていきたいと思っています。
      </Styledp>
      <Styledp>競技プログラミングもやっています。</Styledp>
      <Styledp>
        Atcoder: <a href="https://atcoder.jp/users/Bobyama">Bobyama</a>
        <br />
        TopCoder: <a href="https://www.topcoder.com/members/Bobyama">Bobyama</a>
      </Styledp>
    </StyledContainer>
  </Segment>
)

const StyledDivider = styled(Divider)`
  padding: ${rhythm(1)} 
  padding-left: ${rhythm(1)}
  margin-left: ${rhythm(1)}
`

const Segment = styled.div`
  background-color: white
  border: 1px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
`

const Title = styled.h1`
  font-size: ${scale(2).fontSize}
  line-height: ${rhythm(4)}
  text-align: center
  color: #333333
  padding-top: ${rhythm(2)}
`
const MobileTitle = styled.h1`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(1)}
  text-align: center
  color: #333333
  padding-top: ${rhythm(1)}
`

const Styledp = styled.p`
  font-size: ${scale(1 / 2).fontSize}
  line-height: ${rhythm(2)}
  text-align: center
`
const StyledContainer = styled(Container)`
  padding-bottom: ${rhythm(4)};
`
