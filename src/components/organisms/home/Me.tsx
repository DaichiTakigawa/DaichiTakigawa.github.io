import * as React from 'react';
import styled from '@emotion/styled';
import {Image} from '../../atoms';
import {rhythm, scale} from '../../../lib/typography';

const Me: React.FC = () => (
  <>
    <H2>運営者について</H2>
    <article className="media">
      <figure className="media-left">
        <div className="image is-164x164">
          <Image fileName="profile.png" alt="プロファイル画像" />
        </div>
      </figure>
      <Introduce className="media-content">
        <p>
          未熟者の成れの果て。
          <br />
          主に、Android(kotlin)やiOS(swift)の開発をしています。
        </p>
      </Introduce>
    </article>
    <div>
      <ul>
        <li>
          GitHub :{' '}
          <a
            href="https://github.com/DaichiTakigawa"
            target="_blank"
            rel="noopener noreferrer">
            https://github.com/DaichiTakigawa{' '}
            <i className="fas fa-external-link-alt"></i>
          </a>
        </li>
        <li>
          Twitter :{' '}
          <a
            href="https://twitter.com/damenin27844103"
            target="_blank"
            rel="noopener noreferrer">
            https://twitter.com/damenin27844103{' '}
            <i className="fas fa-external-link-alt"></i>
          </a>
        </li>
        <li>
          Qiita :{' '}
          <a
            href="https://qiita.com/bob_yama"
            target="_blank"
            rel="noopener noreferrer">
            https://qiita.com/bob_yama{' '}
            <i className="fas fa-external-link-alt"></i>
          </a>
        </li>
        <li>
          Zenn :{' '}
          <a
            href="https://zenn.dev/takigawa"
            target="_blank"
            rel="noopener noreferrer">
            https://zenn.dev/takigawa{' '}
            <i className="fas fa-external-link-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  </>
);

export const H2 = styled.h2({
  fontSize: scale(1).fontSize,
  lineHeight: rhythm(2),
  fontWeight: 'bold',
  paddingTop: rhythm(3),
  color: 'rgb(70, 70, 70)',
});

const Introduce = styled.div({
  marginTop: 'auto',
  '& > p': {
    marginBottom: rhythm(2),
    lineHeight: rhythm(1),
  },
});

export default Me;
