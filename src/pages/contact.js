import React from "react"

import Content from "../components/organisms/Content"
import App from "../components/organisms/App"
import Seo from "../components/atoms/Seo"
import Contact from "../components/molecules/Contact"

export default () => (
  <App>
    <Seo title="コンタクト" description="Contact" />
    <Content active="Contact">
      <Contact />
    </Content>
  </App>
)
