import * as React from 'react'
import {graphql} from 'gatsby'

import {Seo} from '../components/atoms'
import {Content} from '../components/organisms'
import {BlogList} from '../components/molecules'
import {Context as UiContext, PageName} from '../contexts/ui'

import {SiteDescriptionQuery} from '../../types/graphql-types'

type Props = {
  data: SiteDescriptionQuery
}

const Component: React.FC<Props> = ({data}) => {
  const {setPageName} = React.useContext(UiContext)
  setPageName(PageName.BLOG)

  return (
    <>
      <Seo title="ブログ" description={data.site.siteMetadata.description} />
      <Content>
        <BlogList />
      </Content>
    </>
  )
}

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
