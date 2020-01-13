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
  return (
    <App>
      <Seo title={frontmatter.title} description={frontmatter.description} />
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
        }
      }
      html
      tableOfContents(pathToSlugField: "frontmatter.slug")
    }
  }
`
