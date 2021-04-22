import * as React from 'react';
import {graphql} from 'gatsby';

import {Seo} from '../components/atoms';
import {BlogPage, Content} from '../components/organisms';
import {UiContext} from '../contexts';
import {PostReactTemplateQuery} from '../../types/graphql-types';

import QuadraticBezierCurvePost from '../../contents/posts/2021-04-22QuadraticBezierCurve';

type Props = {
  data: PostReactTemplateQuery;
};

type Posts = {
  [key: string]: JSX.Element;
};

const posts: Posts = {
  ['/quadratic-bezeir-curve/']: <QuadraticBezierCurvePost />,
};

const Post: React.FC<Props> = ({data}) => {
  const {setSlug} = React.useContext(UiContext.Context);

  const fm = data.markdown.frontmatter;
  const url = `${data.site.siteMetadata.siteUrl}${fm.slug}`;
  const imageUrl = `${data.site.siteMetadata.siteUrl}${fm.thumbnail.publicURL}`;

  React.useEffect(() => {
    setSlug(fm.slug);
  }, []);

  return (
    <>
      <Seo
        isPostPage
        title={fm.title}
        description={fm.description}
        url={url}
        imageUrl={imageUrl}
      />
      <Content>
        <BlogPage
          title={fm.title}
          date={fm.date}
          description={fm.description}
          slug={fm.slug}
          thumbnail={fm.thumbnail.name}
          html={data.markdown.html}
          tags={fm.tags}
          toc={data.markdown.toc}>
          {posts[fm.slug]}
        </BlogPage>
      </Content>
    </>
  );
};

export const query = graphql`
  query PostReactTemplate($slug: String!) {
    markdown: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        slug
        date(formatString: "YYYY.MM.DD")
        tags
        title
        description
        thumbnail {
          name
          publicURL
        }
      }
      html
      toc: tableOfContents(pathToSlugField: "frontmatter.slug")
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default Post;
