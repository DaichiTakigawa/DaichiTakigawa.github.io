import * as React from 'react'
import {graphql} from 'gatsby'

import {Seo} from '../components/atoms'
import {BlogPage, Content} from '../components/organisms'
import {Context as UiContext} from '../contexts/ui'
import {PostTemplateQuery} from '../../types/graphql-types'

type Props = {
  data: PostTemplateQuery
}

const Post: React.FC<Props> = ({data}) => {
  const {setPageName} = React.useContext(UiContext)
  setPageName(null)

  const fm = data.markdown.frontmatter
  const url = `${data.site.siteMetadata.siteUrl}${fm.slug}`
  const imageUrl = `${data.site.siteMetadata.siteUrl}${fm.thumbnail.publicURL}`

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
          tags={fm.tags}
          html={data.markdown.html}
          toc={data.markdown.toc}
        />
      </Content>
    </>
  )
}

export const query = graphql`
  query PostTemplate($slug: String!) {
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
`

export default Post
