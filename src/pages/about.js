import React from "react"

import Content from "../components/organisms/Content"
import App from "../components/organisms/App"
import Home from "../components/molecules/Home"
import Seo from "../components/atoms/Seo"
import About from "../components/molecules/About"

export default () => (
  <App>
    <Seo title="このサイトについて" description="このサイトについて" />
    <Content active="About">
      <About />
    </Content>
  </App>
)
