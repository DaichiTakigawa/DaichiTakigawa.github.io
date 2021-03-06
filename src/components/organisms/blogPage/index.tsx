import * as React from 'react';
import styled from '@emotion/styled';

import {
  AdSense,
  Image,
  Divider,
  ShareButtons,
  Toc,
  Copyright,
} from '../../atoms';
import {Comment} from '../../../containers';
import BlogMeta from './BlogMeta';
import {rhythm, scale} from '../../../lib/typography';
import {responsive} from '../../../constants';

type Props = {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  thumbnail: string;
  html?: string;
  toc: string;
};

const BlogPage: React.FC<Props> = (props) => {
  const url = `https://www.takigawa-memo.com${props.slug}`;
  const shareTitle = `${props.title} - TAKIGAWA MEMO`;

  return (
    <>
      <Container>
        <BlogMeta
          title={props.title}
          date={props.date}
          description={props.description}
          tags={props.tags}
        />
        <Divider />
        <Image fileName={props.thumbnail} alt="thumbnail" />
        <ShareButtons url={url} title={shareTitle} />
        <Toc html={props.toc} />
        <AdSense />
        <Html dangerouslySetInnerHTML={{__html: props.html}} />
        <ReactContainer>{props.children}</ReactContainer>
        <ShareButtons url={url} title={shareTitle} />
        <AdSense />
        <Comment slug={props.slug} />
      </Container>
      <Copyright />
    </>
  );
};

const Container = styled.div({
  paddingBottom: rhythm(4),
  margin: `0 ${rhythm(1)}`,
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    width: '86%',
    margin: '0 auto',
  },
});

const Html = styled.div({
  h2: {
    fontWeight: 'bold',
    fontSize: scale(1 / 2).fontSize,
    lineHeight: rhythm(2),
    margin: `${rhythm(3 / 2)} 0`,
  },
  h3: {
    fontWeight: 'bold',
    fontSize: scale(1 / 6).fontSize,
    lineHeight: rhythm(2),
    margin: `${rhythm(1)} 0`,
  },
  li: {
    fontSize: scale(0).fontSize,
    lineHeight: rhythm(1),
  },
  ul: {
    listStyle: 'disc',
    listStylePosition: 'inside',
  },
  ol: {
    listStylePosition: 'inside',
  },
  tr: {
    fontSize: scale(0).fontSize,
    lineHeight: rhythm(1),
  },
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    li: {
      lineHeight: rhythm(3 / 2),
    },
    tr: {
      lineHeight: rhythm(3 / 2),
    },
  },
});

const ReactContainer = styled.div({
  paddingBottom: rhythm(2),
});

export default BlogPage;
