import React from "react"

import Content from "../components/organisms/Content"
import App from "../components/organisms/App"
import BlogList from "../components/molecules/BlogList"
import Seo from "../components/atoms/Seo"

export default () => (
  <App>
    <Seo title="ブログ" description="ブログ" />
    <Content active="Blog">
      <BlogList />
    </Content>
  </App>
)
