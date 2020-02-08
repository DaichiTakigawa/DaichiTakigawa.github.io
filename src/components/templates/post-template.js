import React from "react"
import { graphql } from "gatsby"

import App from "../organisms/App"
import Content from "../organisms/Content"
import Seo from "../atoms/Seo"
import BlogPage from "../molecules/BlogPage"

export default ({ data }) => {
  let frontmatter = data.markdownRemark.frontmatter
  let html = data.markdownRemark.html
  let toc = data.markdownRemark.tableOfContents
  let url = `https://www.takigawa-memo.com${data.markdownRemark.frontmatter.slug}`
  let imageUrl = `https://www.takigawa-memo.com${data.markdownRemark.frontmatter.thumbnail.publicURL}`
  return (
    <App>
      <Seo
        isPostPage
        title={frontmatter.title}
        description={frontmatter.description}
        url={url}
        imageUrl={imageUrl}
      />
      <Content>
        <BlogPage metadata={frontmatter} html={html} toc={toc} />
      </Content>
    </App>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
      tableOfContents(pathToSlugField: "frontmatter.slug")
    }
  }
`
