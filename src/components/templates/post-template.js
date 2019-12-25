import React from "react"
import { graphql } from "gatsby"

import App from "../organisms/App"
import Content from "../organisms/Content"
import Seo from "../atoms/Seo"
import BlogPage from "../molecules/BlogPage"

export default ({ data }) => {
  let frontmatter = data.markdownRemark.frontmatter
  let html = data.markdownRemark.html
  return (
    <App>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <Content active="Blog">
        <BlogPage metadata={frontmatter} html={html} />
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
    }
  }
`
