import React from "react"
import { graphql } from "gatsby"

import Content from "../components/organisms/Content"
import App from "../components/organisms/App"
import Home from "../components/molecules/Home"
import Seo from "../components/atoms/Seo"

export default ({data}) => (
  <App>
    <Seo title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
    <Content active="Home">
      <Home />
    </Content>
  </App>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
