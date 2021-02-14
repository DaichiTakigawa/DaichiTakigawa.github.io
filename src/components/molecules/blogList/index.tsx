import * as React from 'react';
import styled from '@emotion/styled';
import {useStaticQuery, graphql} from 'gatsby';
import BlogRow from './BlogRow';
import {Divider} from '../../atoms';
import {rhythm, scale} from '../../../lib/typography';
import {responsive} from '../../../constants';
import {MarkdownRemarkFrontmatter} from '../../../../types/graphql-types';

type edge = {
  node: {
    frontmatter: MarkdownRemarkFrontmatter;
  };
};

type data = {
  markdown: {
    edges: edge[];
  };
};

const BlogList: React.FC = () => {
  const {markdown}: data = useStaticQuery(graphql`
    query {
      markdown: allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              slug
              date(formatString: "YYYY.MM.DD")
              tags
              thumbnail {
                name
              }
            }
          }
        }
      }
    }
  `);

  const list = markdown.edges.map((edge: edge) => {
    const fm = edge.node.frontmatter;
    return (
      <React.Fragment key={fm.slug}>
        <BlogRow
          title={fm.title}
          slug={fm.slug}
          description={fm.description}
          tags={fm.tags}
          date={fm.date}
          thumbnail={fm.thumbnail.name}
        />
        <Divider />
      </React.Fragment>
    );
  });

  return (
    <Container>
      <Title>Blog</Title>
      <Divider />
      {list}
    </Container>
  );
};

const Container = styled.div({
  paddingTop: rhythm(2),
  paddingBottom: rhythm(4),
  margin: 'auto',
  width: '80%',
});

const Title = styled.h1({
  fontSize: scale(1 / 2).fontSize,
  lineHeight: rhythm(2),
  color: 'rgb(70, 70, 70)',
  paddingTop: rhythm(1),
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    fontSize: scale(1).fontSize,
    lineHeight: rhythm(3),
    paddingTop: rhythm(2),
    marginBottom: 0,
  },
});

export default BlogList;
