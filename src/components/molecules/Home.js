import React from "react"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

import CustomImage from "../atoms/CustomImage"
import Copyright from "../atoms/Copyright"
import Divider from "../atoms/Divider"
import { responsive } from "../../../config"

export default class Home extends React.Component {
  getSkillTable() {
    return (
      <Table className="table is-striped is-bordered">
        <tbody>
          <tr />
          <tr>
            <td>Android</td>
            <td>アルバイトで開発に従事</td>
            <td>since 2019.9</td>
          </tr>
          <tr>
            <td>AWS</td>
            <td>アルバイトで開発に従事</td>
            <td>since 2019.12</td>
          </tr>
          <tr>
            <td>Webフロントエンド</td>
            <td>Gatsbyを用いて個人で当ブログを運営</td>
            <td>since 2019.12</td>
          </tr>
          <tr>
            <td>機械学習</td>
            <td>始めたい ... </td>
            <td>not yet</td>
          </tr>
          <tr>
            <td>競プロ</td>
            <td>
              リクルート開催 CodeThanksFestival2018本戦出場(43位)
              <br />
              第二回アスプローバプログラミングコンテスト5位入賞
            </td>
            <td>since 2018.06</td>
          </tr>
          <tr>
            <td>TOEIC</td>
            <td>スコア 910</td>
            <td>2016.4</td>
          </tr>
        </tbody>
      </Table>
    )
  }

  getText() {
    return (
      <>
        <Header>運営者について</Header>
        <article className="media">
          <figure className="media-left">
            <Profile class="image">
              <CustomImage fileName="profile" alt="プロファイル画像" />
            </Profile>
          </figure>
          <Introduce class="media-content">
            <p>都内に住む学生。</p>
          </Introduce>
        </article>
        <P>
          <ul>
            <li>
              GitHub :{" "}
              <a
                href="https://github.com/DaichiTakigawa"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/DaichiTakigawa{" "}
                <i class="fas fa-external-link-alt"></i>
              </a>
            </li>
            <li>
              Twitter :{" "}
              <a
                href="https://twitter.com/damenin27844103"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://twitter.com/damenin27844103{" "}
                <i class="fas fa-external-link-alt"></i>
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
              <a
                href="https://atcoder.jp/users/Bobyama"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://atcoder.jp/users/Bobyama{" "}
                <i class="fas fa-external-link-alt"></i>
              </a>{" "}
              (Rating : 1762)
            </li>
            <li>
              TopCoder :{" "}
              <a
                href="https://www.topcoder.com/members/Bobyama"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.topcoder.com/members/Bobyama{" "}
                <i class="fas fa-external-link-alt"></i>
              </a>{" "}
              (Raging : 1335)
            </li>
          </ul>
        </P>
      </>
    )
  }

  render() {
    return (
      <Segment>
        <CustomImage fileName="home-image" alt="実家の犬ども" />
        <StyledContainer>
          <Title>TAKIGAWA MEMO</Title>
          <StyledDivider />
          <Text>{this.getText()}</Text>
        </StyledContainer>
        <Copyright />
      </Segment>
    )
  }
}

const Segment = styled.main`
  background-color: white
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px;
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
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
  text-align: center
  color: #333333
  padding-top: ${rhythm(1)}

  @media (max-width: ${responsive.tablet.maxWidth}px) 
    and (min-width: ${responsive.tablet.minWidth}) {
    font-size: ${scale(3 / 2).fontSize}
    line-height: ${rhythm(3)}
    text-align: center
    color: #333333
    padding-top: ${rhythm(2)}
  }

  @media (min-width: ${responsive.computer.minWidth}) {
    font-size: ${scale(2).fontSize}
    line-height: ${rhythm(4)}
    text-align: center
    color: #333333
    padding-top: ${rhythm(2)}
  }
`

const Text = styled.p`
  font-size: ${scale(0).fontSize}
  line-height: ${scale(0).lineHeight}
  margin-top: ${rhythm(1)}
  color: rgb(80, 80, 80);

  @media (min-width: ${responsive.tablet.minWidth}) {
    font-size: ${scale(1 / 8).fontSize}
    line-height: ${scale(1 / 8).lineHeight}
    margin-top: ${rhythm(2)}
  }
`

const Header = styled.h2`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
  padding-top: ${rhythm(1)}
  color: rgb(70, 70, 70);
`
const P = styled.p`
  margin-bottom: ${rhythm(2)}
  margin-top: ${rhythm(1)}
`

const Table = styled.table`
  margin-top: ${rhythm(1)}
  margin-bottom: ${rhythm(3)}
  color: rgb(80, 80, 80);
`

const Profile = styled.p`
  width: ${rhythm(8)} 
  margin-right: ${rhythm(1)}
`

const Introduce = styled.div`
  margin-top: auto
  & > p {
    margin-bottom: ${rhythm(2)}
  }
`
