import * as React from 'react';
import styled from '@emotion/styled';
import {rhythm} from '../../../lib/typography';

import {H2} from './Me';

const Portfolio: React.FC = () => (
  <>
    <H2>ポートフォリオ</H2>
    <TableContainer className="table-container">
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
    </TableContainer>
  </>
);

const TableContainer = styled.div({
  marginTop: rhythm(2),
  marginBottom: `${rhythm(3)} !important`,
  paddingLeft: '1px',
  paddingTop: '1px',
});

const Table = styled.table({
  color: 'rgb(80, 80, 80)',
  marginBottom: 0,
});

export default Portfolio;
