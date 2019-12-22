import React from "react"

import Content from "../components/organisms/Content"
import App from "../components/organisms/App"
import Home from "../components/molecules/Home"
import Seo from "../components/atoms/Seo"


export default () => (
  <App>
    <Seo title="たきがわのメモ" description="備忘録"/>
    <Content>
      <Home>

      </Home>
    </Content>
  </App>
)
