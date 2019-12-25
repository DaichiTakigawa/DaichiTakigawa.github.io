import React from "react"

import Content from "../components/organisms/Content"
import App from "../components/organisms/App"
import Home from "../components/molecules/Home"
import Seo from "../components/atoms/Seo"

export default () => (
  <App>
    <Seo title="このサイトについて" description="このサイトについて" />
    <Content active="About">
      <dv>このさいとについて</dv>
    </Content>
  </App>
)
