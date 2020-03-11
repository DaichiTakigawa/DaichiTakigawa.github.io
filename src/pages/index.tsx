import * as React from "react"
import { graphql } from "gatsby"

import App from "../components/organisms/app"
import Content from "../components/organisms/content"
import Seo from "../components/atoms/seo"
import Home from "../components/molecules/home"
import { BaseSiteDataQueryQuery } from "../../types/graphql-types"

type Props = {
  data: BaseSiteDataQueryQuery
}

const Component: React.FC<Props> = ({ data }) => (
  <App>
    <Seo title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
    <Content currentPage="Home">
      <Home />
    </Content>
  </App>
)

export default Component

export const query = graphql`
  query BaseSiteDataQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`