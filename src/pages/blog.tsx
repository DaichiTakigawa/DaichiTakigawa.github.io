import * as React from 'react'
import {graphql} from 'gatsby'

import Content from '../components/organisms/content'
import App from '../components/organisms/app'
import BlogList from '../components/molecules/blogList'
import Seo from '../components/atoms/seo'

import {SiteDescriptionQuery} from '../../types/graphql-types'

type Props = {
  data: SiteDescriptionQuery
}

const Component: React.FC<Props> = ({data}) => (
  <App>
    <Seo title="ブログ" description={data.site.siteMetadata.description} />

    <Content currentPage="Blog">
      <BlogList />
    </Content>
  </App>
)

export const query = graphql`
  query SiteDescription {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default Component
