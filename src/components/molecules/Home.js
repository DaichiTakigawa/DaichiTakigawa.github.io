import React from "react"
import styled from "styled-components"
import { Divider, Flag, Responsive } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"

import CustomImage from "../atoms/CustomImage"

export default class Home extends React.Component {
  getText() {
    return (
      <div>
        <P>
          I'm a software engineer in Tokyo, Japan <Flag name="japan" />
        </P>
        <Header>運営者について</Header>
        <P>都内に住むプログラミング初心者の学生です。</P>
        <P>
          <ul>
            <Li>
              GitHub:{" "}
              <a href="https://github.com/DaichiTakigawa">
                https://github.com/DaichiTakigawa
              </a>
            </Li>
          </ul>
        </P>
        <Header>スキル</Header>
        <P>
          <Divider style={{margin: "0"}}/>
          <table>
            <tr>
              <th>Androidアプリ開発</th>
              <th>アルバイトで開発に従事</th>
              <th>since 2019.9</th>
            </tr>
            <tr>
              <th>AWSでのサーバレス開発</th>
              <th>アルバイトで開発に従事</th>
              <th>since 2019.12</th>
            </tr>
            <tr>
              <th>Webフロントエンド</th>
              <th>GatsbyJSを用いて個人で当ブログを運営</th>
              <th>since 2019.12</th>
            </tr>
            <tr>
              <th>機械学習</th>
              <th>始めたい ... </th>
              <th>not yet</th>
            </tr>
            <tr>
              <th>競プロ</th>
              <th>
                リクルート開催 CodeThanksFestival2018本戦出場(43位)
                <br />
                第二回アスプローバプログラミングコンテスト5位入賞
              </th>
              <th>since 2018.06</th>
            </tr>
          </table>
        </P>
        <P>競技プログラミングやっています。 </P>
        <P>
          <ul>
            <Li>
              Atcoder :{" "}
              <a href="https://atcoder.jp/users/Bobyama">
                https://atcoder.jp/users/Bobyama
              </a>{" "}
              (Rating : 1762)
            </Li>
            <Li>
              TopCoder :{" "}
              <a href="https://www.topcoder.com/members/Bobyama">
                https://www.topcoder.com/members/Bobyama
              </a>{" "}
              (Raging : 1335)
            </Li>
          </ul>
        </P>
      </div>
    )
  }

  render() {
    return (
      <Segment>
        <CustomImage fileName="profile" alt="profile" />
        <StyledContainer>
          <Responsive as={Title} minWidth={Responsive.onlyComputer.minWidth}>
            TAKIGAWA MEMO
          </Responsive>
          <Responsive
            as={TabletTitle}
            minWidth={Responsive.onlyTablet.minWidth}
            maxWidth={Responsive.onlyTablet.maxWidth}
          >
            TAKIGAWA MEMO
          </Responsive>
          <Responsive
            as={MobileTitle}
            maxWidth={Responsive.onlyMobile.maxWidth}
          >
            TAKIGAWA MEMO
          </Responsive>
          <StyledDivider />
          <Responsive as={Text} minWidth={Responsive.onlyTablet.minWidth}>
            {this.getText()}
          </Responsive>
          <Responsive as={MobileText} maxWidth={Responsive.onlyMobile.maxWidth}>
            {this.getText()}
          </Responsive>
        </StyledContainer>
      </Segment>
    )
  }
}

const Segment = styled.div`
  background-color: white
  border: 1px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
`

const StyledContainer = styled.div`
  padding-bottom: ${rhythm(4)}
  margin: auto
  width: 80%
`

const StyledDivider = styled(Divider)`
  padding-left: ${rhythm(1)}
  margin-left: ${rhythm(1)}
`
const Title = styled.h1`
  font-size: ${scale(2).fontSize}
  line-height: ${rhythm(4)}
  color: #333333
  padding-top: ${rhythm(2)}
`
const TabletTitle = styled.h1`
  font-size: ${scale(3 / 2).fontSize}
  line-height: ${rhythm(3)}
  color: #333333
  padding-top: ${rhythm(2)}
`
const MobileTitle = styled.h1`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
  color: #333333
  padding-top: ${rhythm(1)}
`

const Text = styled.p`
  font-size: ${scale(1 / 4).fontSize}
  margin-top: ${rhythm(2)}
`

const MobileText = styled.p`
  font-size: ${scale(0).fontSize}
  margin-top: ${rhythm(1)}
`

const Header = styled.h1`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
  color: rgb(70, 70, 70);
`
const P = styled.p`
  margin: ${rhythm(2)} 0
  line-height: ${rhythm(2)};
  color: rgb(80, 80, 80);
`
const Li = styled.li`
  color: rgb(80, 80, 80);
  line-height: ${rhythm(1)};
`