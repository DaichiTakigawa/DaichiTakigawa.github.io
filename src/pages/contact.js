import React from "react"

import Content from "../components/organisms/Content"
import App from "../components/organisms/App"
import Home from "../components/molecules/Home"
import Seo from "../components/atoms/Seo"

export default () => (
  <App>
    <Seo title="コンタクト" description="Contact" />
    <Content active="Contact">
      <div>開発中</div>
    </Content>
  </App>
)
