import React from "react"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

import Copyright from "../atoms/Copyright"
import { responsive } from "../../../config"

export default class Home extends React.Component {
  getText() {
    return (
      <>
        <Header>このサイトについて</Header>
        <P>
          <a href="/">TAKIGAWA MEMO</a>
          はプログラミング初心者の当ブログ運営者が備忘録としてまとめたものです。
          <br />
          <s>GatsbyとSemantic UIを用いて作成しました。</s>
          <br />
          2020/02/18日現在CSSライブラリはSemantic UIからBulmaに移行しています。
        </P>
        <P>
          主に、Android、AWS、Javasricpt、Windowsについて、躓いたことや、気付いた点をまとめていきたいです。
          <br />
          競プロの問題を解いていて、分からなかったことも書いていけたらなと思っています。
        </P>
        <P>
          読んでいただいた方にとって、少しでもお役に立つ情報が提供できれば幸いです。
        </P>
        <Header>免責事項</Header>
        <P>
          できる限り正確な情報を掲載していくことを心掛けていきますが、情報が古くなっていることもありますので、正確性は保証できません。
          <br />
          当ブログの掲載情報を利用したことによるトラブル、損失、損害等の発生に対しては一切の責任を負いかねます。
        </P>
        <Header>プライバシーポリシー</Header>
        <P>
          当ブログでは、サイトの利用状況を収集するためにCookieを利用させていただいています。
          <br />
          アクセスログは匿名で収集されており、個人を特定するものではありません。
          また、収集したログを解析するためにGoogle Analyticsを使用しています。
          Google
          Analyticsでデータが収集、処理される仕組みやプライバシーポリシーについては以下のサイトをご覧ください。
        </P>
        <P>
          <a
            href="https://developers.google.com/analytics/?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google アナリティクス <i class="fas fa-external-link-alt" />
          </a>
          <br />
          <a
            href="https://policies.google.com/privacy?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google プライバシーポリシー <i class="fas fa-external-link-alt" />
          </a>
        </P>
        <P>
          なお、Cookieを無効にすることでアクセスログの収集の拒否が可能ですので、お使いのブラウザの設定をご確認ください。
        </P>
      </>
    )
  }

  render() {
    return (
      <>
        <StyledContainer>
          <MobileTitle>About</MobileTitle>
          <MobileText>{this.getText()}</MobileText>
        </StyledContainer>
        <Copyright />
      </>
    )
  }
}

const StyledContainer = styled.div`
  padding-bottom: ${rhythm(4)};
  padding-top: ${rhythm(2)};
  margin: auto;
  width: 80%;
`

const MobileTitle = styled.h1`
  font-size: ${scale(1 / 2).fontSize};
  line-height: ${rhythm(2)};
  color: rgb(70, 70, 70);
  padding-top: ${rhythm(1)};

  @media (min-width: ${responsive.tablet.minWidth}) {
    font-size: ${scale(1).fontSize};
    line-height: ${rhythm(3)};
    padding-top: ${rhythm(2)};
    margin-bottom: 0;
  }
`

const Header = styled.h2.attrs({className: "title is-4"})`
  font-size: ${scale(1 / 2).fontSize};
  line-height: ${rhythm(2)};
  color: rgb(70, 70, 70);
`
const MobileText = styled.div`
  font-size: ${scale(0).fontSize};
  margin-top: ${rhythm(1)};

  @media (min-width: ${responsive.tablet.minWidth}) {
    font-size: ${scale(1 / 8).fontSize};
    margin-top: ${rhythm(2)};
  }

`
const P = styled.p`
  margin: ${rhythm(1)} 0;
  line-height: ${rhythm(2)};
  color: rgb(80, 80, 80);
`
