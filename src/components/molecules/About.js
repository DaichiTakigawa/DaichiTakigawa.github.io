import React from "react"
import styled from "styled-components"
import { Responsive } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"

import Copyright from "../atoms/Copyright"

export default class Home extends React.Component {
  getText() {
    return (
      <div>
        <Header>このサイトについて</Header>
        <P>
          <a href="/">TAKIGAWA MEMO</a>
          はプログラミング初心者の当ブログ運営者が備忘録としてまとめたものです。
          <br />
          GatsbyとSemantic UIを用いて作成しました。
        </P>
        <P>
          主に、Android、AWS、Javasricpt、Windowsについて、躓いたことや、気付いた点をまとめていきたいです。
          <br />
          競プロの問題を解いていて、分からなかったことも書いていけたらなと思っています。
        </P>
        <P>
          読んでいただいた方にとって、少しでもお役に立つ情報が提供できれば幸いです。
          ٩(ˊᗜˋ*)و
        </P>
        <Header>免責事項</Header>
        <P>
          できる限り正確な情報を掲載していくことを心掛けていきますが、情報が古くなっていることもありますので、正確性は保証できません。
          <br />
          当ブログの掲載情報を利用したことによるトラブル、損失、損害等の発生に対しては一切の責任を負いかねます。
        </P>
      </div>
    )
  }

  render() {
    return (
      <Segment>
        <StyledContainer>
          <Responsive as={Title} minWidth={Responsive.onlyTablet.minWidth}>
            About
          </Responsive>
          <Responsive
            as={MobileTitle}
            maxWidth={Responsive.onlyMobile.maxWidth}
          >
            About
          </Responsive>
          <Responsive as={Text} minWidth={Responsive.onlyTablet.minWidth}>
            {this.getText()}
          </Responsive>
          <Responsive as={MobileText} maxWidth={Responsive.onlyMobile.maxWidth}>
            {this.getText()}
          </Responsive>
        </StyledContainer>
        <Copyright />
      </Segment>
    )
  }
}

const Segment = styled.div`
  background-color: white
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px;
`

const StyledContainer = styled.div`
  padding-bottom: ${rhythm(4)}
  padding-top: ${rhythm(2)}
  margin: auto
  width: 80%
`

const Title = styled.h1`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(3)}
  color: rgb(70, 70, 70);
  padding-top: ${rhythm(2)}
  margin-bottom: 0
`

const MobileTitle = styled.h1`
  font-size: ${scale(1 / 2).fontSize}
  line-height: ${rhythm(2)}
  color: rgb(70, 70, 70);
  padding-top: ${rhythm(1)}
`

const Header = styled.h2`
  font-size: ${scale(1 / 2).fontSize}
  line-height: ${rhythm(2)}
  color: rgb(70, 70, 70);
`

const Text = styled.p`
  font-size: ${scale(1 / 8).fontSize}
  margin-top: ${rhythm(2)}
`
const MobileText = styled.p`
  font-size: ${scale(0).fontSize}
  margin-top: ${rhythm(1)}
`

const P = styled.p`
  padding: ${rhythm(1)} 0
  line-height: ${rhythm(2)};
  color: rgb(80, 80, 80);
`
