import React from "react"
import styled from "styled-components"
import { Divider, Flag, Responsive, Table } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"

import CustomImage from "../atoms/CustomImage"
import Copyright from "../atoms/Copyright"

export default class Home extends React.Component {
  getSkillTable() {
    return (
      <Table
        celled
        striped
        basic="very"
        style={{
          marginTop: rhythm(1),
          marginBottom: rhythm(3),
          color: "rgb(80, 80, 80)",
        }}
      >
        <Table.Body>
          <Table.Row />
          <Table.Row>
            <Table.Cell>Android</Table.Cell>
            <Table.Cell>アルバイトで開発に従事</Table.Cell>
            <Table.Cell>since 2019.9</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>AWS</Table.Cell>
            <Table.Cell>アルバイトで開発に従事</Table.Cell>
            <Table.Cell>since 2019.12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Webフロントエンド</Table.Cell>
            <Table.Cell>GatsbyJSを用いて個人で当ブログを運営</Table.Cell>
            <Table.Cell>since 2019.12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>機械学習</Table.Cell>
            <Table.Cell>始めたい ... </Table.Cell>
            <Table.Cell>not yet</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>競プロ</Table.Cell>
            <Table.Cell>
              リクルート開催 CodeThanksFestival2018本戦出場(43位)
              <br />
              第二回アスプローバプログラミングコンテスト5位入賞
            </Table.Cell>
            <Table.Cell>since 2018.06</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }

  getText() {
    return (
      <div>
        <LargeP>
          I'm a software engineer in Tokyo, Japan <Flag name="japan" />
        </LargeP>
        <Header>運営者について</Header>
        <P>
          都内に住む学生。
          <br />
          <br />
          <ul>
            <li>
              GitHub :{" "}
              <a href="https://github.com/DaichiTakigawa">
                https://github.com/DaichiTakigawa
              </a>
            </li>
            <li>
              Twitter :{" "}
              <a href="https://twitter.com/damenin27844103">
                https://twitter.com/damenin27844103
              </a>
            </li>
          </ul>
        </P>
        <Header>ポートフォリオ</Header>
        {this.getSkillTable()}
        <P>競技プログラミングやっています。 </P>
        <P>
          <ul>
            <li>
              Atcoder :{" "}
              <a href="https://atcoder.jp/users/Bobyama">
                https://atcoder.jp/users/Bobyama
              </a>{" "}
              (Rating : 1762)
            </li>
            <li>
              TopCoder :{" "}
              <a href="https://www.topcoder.com/members/Bobyama">
                https://www.topcoder.com/members/Bobyama
              </a>{" "}
              (Raging : 1335)
            </li>
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
        <Copyright />
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
  text-align: center
  color: #333333
  padding-top: ${rhythm(2)}
`
const TabletTitle = styled.h1`
  font-size: ${scale(3 / 2).fontSize}
  line-height: ${rhythm(3)}
  text-align: center
  color: #333333
  padding-top: ${rhythm(2)}
`
const MobileTitle = styled.h1`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
  text-align: center
  color: #333333
  padding-top: ${rhythm(1)}
`

const Text = styled.p`
  font-size: ${scale(1 / 8).fontSize}
  line-height: ${scale(1 / 8).lineHeight}
  margin-top: ${rhythm(2)}
  color: rgb(80, 80, 80);
`

const MobileText = styled.p`
  font-size: ${scale(0).fontSize}
  line-height: ${scale(0).lineHeight}
  margin-top: ${rhythm(1)}
  color: rgb(80, 80, 80);
`

const Header = styled.h1`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
  padding-top: ${rhythm(1)}
  color: rgb(70, 70, 70);
`
const P = styled.p`
  margin-bottom: ${rhythm(2)}
  margin-top: ${rhythm(1)}
`
const LargeP = styled.p`
  text-align: center
  padding-top: ${rhythm(1)}
  padding-bottom: ${rhythm(2)}
  font-size: ${scale(1 / 2).fontSize}
  line-height: ${scale(1 / 2).lineHeight};
  color: rgb(80, 80, 80);
`
