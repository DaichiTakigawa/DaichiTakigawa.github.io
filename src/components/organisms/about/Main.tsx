import * as React from 'react';
import styled from '@emotion/styled';
import {scale, rhythm} from '../../../lib/typography';

import {responsive} from '../../../constants';

const Main: React.FC = () => (
  <Container>
    <H2>このサイトについて</H2>
    <p>
      <a href="/">TAKIGAWA MEMO</a>
      はプログラミング初心者の当ブログ運営者が備忘録としてまとめたものです。
      <br />
      Gatsbyと<s>Semantic UI</s>を用いて作成しました。
      <br />
      <i>2020/02/18日現在CSSライブラリはSemantic UIからBulmaに移行しました。</i>
    </p>
    <p>
      主に、Android、AWS、Javasricpt、Windowsについて、躓いたことや、気付いた点をまとめていきたいです。
      <br />
      競プロの問題を解いていて、分からなかったことも書いていけたらなと思っています。
    </p>
    <p>
      読んでいただいた方にとって、少しでもお役に立つ情報が提供できれば幸いです。
    </p>
    <H2>免責事項</H2>
    <p>
      できる限り正確な情報を掲載していくことを心掛けていきますが、情報が古くなっていることもありますので、正確性は保証できません。
      <br />
      当ブログの掲載情報を利用したことによるトラブル、損失、損害等の発生に対しては一切の責任を負いかねます。
    </p>
    <H2>プライバシーポリシー</H2>
    <p>
      当ブログでは、サイトの利用状況を収集するためにCookieを利用させていただいています。
      <br />
      アクセスログは匿名で収集されており、個人を特定するものではありません。
      また、収集したログを解析するためにGoogle Analyticsを使用しています。
      Google
      Analyticsでデータが収集、処理される仕組みやプライバシーポリシーについては以下のサイトをご覧ください。
    </p>
    <p>
      <a
        href="https://developers.google.com/analytics/?hl=ja"
        target="_blank"
        rel="noopener noreferrer">
        Google アナリティクス <i className="fas fa-external-link-alt" />
      </a>
      <br />
      <a
        href="https://policies.google.com/privacy?hl=ja"
        target="_blank"
        rel="noopener noreferrer">
        Google プライバシーポリシー <i className="fas fa-external-link-alt" />
      </a>
    </p>
    <p>
      なお、Cookieを無効にすることでアクセスログの収集の拒否が可能ですので、お使いのブラウザの設定をご確認ください。
    </p>
  </Container>
);

const Container = styled.div({
  fontSize: scale(0).fontSize,
  marginTop: rhythm(1),
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    fontSize: scale(1 / 8).fontSize,
    marginTop: rhythm(2),
  },
});

const H2 = styled.h2({
  fontSize: scale(1 / 2).fontSize,
  lineHeight: rhythm(2),
  fontWeight: 'bold',
  color: 'rgb(70, 70, 70)',
});

export default Main;
